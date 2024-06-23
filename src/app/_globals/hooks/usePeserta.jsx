import { useAppDispatch, useAppSelector } from "@presensi/app/redux/useRedux";
import useResponse from "./useResponse";
import { useCallback } from "react";
import { ERROR_MESSAGE } from "../constant/success-response.constant";
import {
  PESERTA_SELECTOR_COLLECTION,
  REQUEST_PESERTA_LIST,
} from "@presensi/app/redux/peserta";
import { useRouter } from "next/router";

const usePeserta = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pending, list, error, success } = useAppSelector(
    PESERTA_SELECTOR_COLLECTION
  );
  const { handleError } = useResponse();

  const getPesertaList = useCallback(
    (payload) => {
      dispatch(REQUEST_PESERTA_LIST(payload)).then((res) => {
        if (res.meta.requestStatus === "rejected") {
          console.log("res", res);
          handleError(
            400,
            res.payload.response.statusText === ERROR_MESSAGE.UNAUTHORIZED
              ? "Please, do login first"
              : res.payload.response.statusText
          );
          if (res.payload.response.statusText === ERROR_MESSAGE.UNAUTHORIZED) {
            router.push({
              pathname: "/",
              query: { redirectTo: "/peserta" },
            });
          }
        }
      });
    },
    [dispatch, handleError, router]
  );

  return { getPesertaList, pending, list, error, success };
};

export default usePeserta;
