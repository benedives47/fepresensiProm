import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AlreadyUpdate = () => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading textAlign="center">Hello</Heading>
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
          Looks like you&apos;ve already checked in before
        </Text>
      </Flex>
    </>
  );
};

export default AlreadyUpdate;
