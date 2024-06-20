import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const FailedUpdate = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading color="summer.500" textAlign="center">
        Oops ...
      </Heading>
      <Text
        fontSize="14px"
        textAlign="center"
        color="gray.500"
        fontWeight={500}
      >
        Your check in has been failed, please try again later
      </Text>
    </Flex>
  );
};

export default FailedUpdate;
