import { Flex, Heading, Image, Text } from "@chakra-ui/react";
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
      {data?.qtypink && (
        <Flex>
          <Image src="/assets/flowers/pink.svg" alt="pink flower" w="20px" />
          <Text as="span" color="pink.200">
            : {data?.qtypink}
          </Text>{" "}
        </Flex>
      )}
      {data?.qtyred && (
        <Flex>
          <Image src="/assets/flowers/red.svg" alt="red" w="22px" />
          <Text as="span" color="red.500">
            : {data?.qtyred}
          </Text>
        </Flex>
      )}
      {data?.qtywhite && (
        <Flex>
          <Image src="/assets/flowers/white.svg" alt="red" w="16px" />
          <Text as="span" color="white.500">
            : {data?.qtywhite}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default SuccessUpdate;
