import { useAppDispatch, useAppSelector } from "@presensi/app/redux/useRedux";
import useResponse from "./useResponse";
import { useCallback } from "react";
import {
  PRESENTION_SELECTOR_COLLECTION,
  REQUEST_PRESENTION,
} from "@presensi/app/redux/presention";

const usePresention = () => {
  const dispatch = useAppDispatch();
  const { pending, data, error, success, successMessage } = useAppSelector(
    PRESENTION_SELECTOR_COLLECTION
  );
  const { handleError, handleSuccess } = useResponse();

  const updatePresention = useCallback(
    (payload) => {
      dispatch(REQUEST_PRESENTION(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          handleSuccess("Successfully logged in");
        } else if (res.meta.requestStatus === "rejected") {
          handleError(500, res.payload.code);
        }
      });
    },
    [dispatch, handleError, handleSuccess]
  );

  return { pending, data, error, success, successMessage, updatePresention };
};

export default usePresention;
