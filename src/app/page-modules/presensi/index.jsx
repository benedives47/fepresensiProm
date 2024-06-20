import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Presensi = () => {
  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      position="relative"
      gap="30px"
    >
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
      <Flex flexDir="column" alignItems="center" gap="10px">
        <Flex mt="8px" flexDir="column" alignItems="center">
          <Text fontSize="14px" mb="8px" color="gray.400" fontWeight={500}>
            Trans Luxury Hotel Bandung
          </Text>
          <Text fontSize="12px" color="gray.500" fontWeight={400}>
            Jl. Gatot Subroto No. 289
          </Text>
          <Text fontSize="12px" color="gray.500" fontWeight={400}>
            Kec. Batununggal Kota Bandung
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Presensi;
