import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const AlreadyUpdate = ({ data }) => {
  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Heading textAlign="center" fontSize="20px">
          Hello
        </Heading>
        <Text
          fontSize="16px"
          textAlign="center"
          color="summer-gold.500"
          fontWeight={700}
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
          Looks like you&apos;ve already checked in before
        </Text>
        <Flex gap="10px">
          {data?.qtypink > 0 && (
            <Flex>
              <Image
                src="/assets/flowers/pink.svg"
                alt="pink flower"
                w="20px"
              />
              <Text as="span" color="pink.200">
                : {data?.qtypink}
              </Text>{" "}
            </Flex>
          )}
          {data?.qtyred > 0 && (
            <Flex>
              <Image src="/assets/flowers/red.svg" alt="red" w="22px" />
              <Text as="span" color="red.500">
                : {data?.qtyred}
              </Text>
            </Flex>
          )}
          {data?.qtywhite > 0 && (
            <Flex>
              <Image src="/assets/flowers/white.svg" alt="red" w="16px" />
              <Text as="span" color="white.500">
                : {data?.qtywhite}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default AlreadyUpdate;
