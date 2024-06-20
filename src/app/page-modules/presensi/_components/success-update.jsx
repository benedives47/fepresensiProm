import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SuccessUpdate = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading textAlign="center">Welcome</Heading>
      <Text
        fontSize="16px"
        textAlign="center"
        color="summer-gold.500"
        fontWeight={700}
      >
        Muhammad Ansari Christiani
      </Text>
      <Text
        fontSize="14px"
        textAlign="center"
        color="gray.500"
        fontWeight={500}
      >
        Your check in has been successful
      </Text>
    </Flex>
  );
};

export default SuccessUpdate;
