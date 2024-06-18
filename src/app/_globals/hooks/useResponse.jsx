import { EErrorMessage } from "@/jobs-type/configuration/error.type";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

const useResponse = () => {
  const router = useRouter();
  const toast = useToast();

  const shouldRedirect = useMemo(
    () => [EErrorMessage.NOT_AUTHORIZED, EErrorMessage.NOT_FOUND],
    []
  );

  const showToast = useCallback(
    (title, status, message) => {
      toast({
        position: "top",
        title: title,
        description: message,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );

  const handleSuccess = useCallback(
    (message) => {
      showToast("Success", "success", message);
    },
    [showToast]
  );

  const handleError = useCallback(
    (errorCode, message, redirect = true) => {
      switch (errorCode) {
        case 401:
          // Unathourized
          console.log("Error 401", message);
          break;
        case 403:
          // Denied
          console.log("Error 403", message);
          break;
        case 404:
          // Invalid / Not Found
          console.log("Error 404", message);
          break;
        case 413:
          // Request too large
          console.log("Error 413", message);
          showToast("Oops..", "error", message);
          break;
        case 500:
          // Server Error
          console.log("Error 500 GUYS", message);
          showToast("Oops..", "error", message);
          break;
        case 400:
          // Client Error
          console.log("Error 400", message);
          showToast("Oops..", "warning", message);
          if (redirect && shouldRedirect.includes(message)) {
            router.back();
          }
          break;
        default:
          // Unknown
          showToast(
            "Ooops..",
            "error",
            message ?? "Something Went Wrong Please Try Again Later"
          );
          break;
      }
    },
    [router, shouldRedirect, showToast]
  );

  return { handleSuccess, handleError };
};

export default useResponse;
