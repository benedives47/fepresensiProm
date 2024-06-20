import {
  AUTH_SELECTOR_COLLECTION,
  REQUEST_SIGN_IN,
} from "@presensi/app/redux/authentication";
import { useAppDispatch, useAppSelector } from "@presensi/app/redux/useRedux";
import useResponse from "./useResponse";
import { useCallback } from "react";

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const { pending, data, error, succcess } = useAppSelector(
    AUTH_SELECTOR_COLLECTION
  );
  const { handleError, handleSuccess } = useResponse();

  const signIn = useCallback(
    (payload) => {
      dispatch(REQUEST_SIGN_IN(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          handleSuccess("Successfully logged in");
        } else if (res.meta.requestStatus === "rejected") {
          handleError(
            res.payload.response.status,
            res.payload.response.statusText
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess]
  );

  return { pending, data, error, succcess, signIn };
};

export default useAuthentication;
