import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuthentication from "@presensi/app/_globals/hooks/useAuthentication";
import Cookies from "js-cookie";
import LoginForm from "./_components/login-form";
import LoginSuccess from "./_components/login-success";

const Auth = () => {
  const { signIn, success, pending } = useAuthentication();
  const [isActive, setIsActive] = useState(success);

  useEffect(() => {
    const isActivated = Cookies.get("act");
    if (isActivated || success) {
      setIsActive(true);
    }
  }, [success]);

  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <Flex flexDir="column" py="10px" position="relative">
      {isActive ? (
        <LoginSuccess />
      ) : (
        <LoginForm
          pending={pending}
          setIsActive={setIsActive}
          onSubmit={onSubmit}
        />
      )}
    </Flex>
  );
};

export default Auth;
