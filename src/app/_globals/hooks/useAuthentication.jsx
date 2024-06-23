import {
  AUTH_SELECTOR_COLLECTION,
  REQUEST_SIGN_IN,
} from "@presensi/app/redux/authentication";
import { useAppDispatch, useAppSelector } from "@presensi/app/redux/useRedux";
import useResponse from "./useResponse";
import { useCallback } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useAuthentication = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { pending, data, error, success } = useAppSelector(
    AUTH_SELECTOR_COLLECTION
  );
  const { handleError, handleSuccess } = useResponse();

  const signIn = useCallback(
    (payload) => {
      dispatch(REQUEST_SIGN_IN(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          handleSuccess("Successfully logged in");
          Cookies.set("act", res.payload.data.token);
          if (router?.query?.id) {
            router.push({
              pathname: "/presensi",
              query: { id: router?.query?.id },
            });
          } else if (router?.query?.redirectTo) {
            router.push({
              pathname: router?.query?.redirectTo,
            });
          }
        } else if (res.meta.requestStatus === "rejected") {
          console.log("res", res);
          handleError(
            res.payload.response.status,
            res.payload.response.data.errors
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess, router]
  );

  return { pending, data, error, success, signIn };
};

export default useAuthentication;
