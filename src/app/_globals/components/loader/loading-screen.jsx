import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const LoadingScreen = ({ text }) => {
  return (
    <Flex flexDir="column" alignItems="center" py="20px" gap="20px">
      <Spinner size="xl" color="summer-gold.500" />
      <Text color="summer-gold.500" fontWeight={700} variant="heading/h6">
        {text}
      </Text>
    </Flex>
  );
};

export default LoadingScreen;
