import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SuccessUpdate = ({ data }) => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Heading textAlign="center">Welcome</Heading>
      <Text
        fontSize="16px"
        textAlign="center"
        color="summer-gold.500"
        fontWeight={700}
        textTransform="capitalize"
      >
        {data?.firstname} {data?.lastname}
      </Text>
      <Text
        fontSize="14px"
        textAlign="center"
        fontWeight={400}
        color="gray.500"
      >
        {data?.class}
      </Text>
      <Text
        fontSize="16px"
        textAlign="center"
        color="gray.300"
        fontWeight={500}
      >
        Your check in has been successful
      </Text>
    </Flex>
  );
};

export default SuccessUpdate;
