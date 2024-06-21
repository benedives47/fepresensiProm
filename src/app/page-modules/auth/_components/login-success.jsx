import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const LoginSuccess = () => {
  return (
    <Flex flexDir="column" alignItems="center" gap="10px">
      <Text
        textAlign="center"
        variant="body/xl"
        color="summer-gold.500"
        fontWeight={700}
      >
        Login Success
      </Text>
      <Text textAlign="center">
        Login Successfully, you can now scan participant QR code
      </Text>
    </Flex>
  );
};

export default LoginSuccess;
