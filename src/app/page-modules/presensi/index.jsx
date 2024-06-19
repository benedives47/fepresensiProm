import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Presensi = () => {
  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      position="relative"
      gap="30px"
    >
      {/* <Text fontSize="14px" textAlign="center" my="10px">
        Welcome,{" "}
        <Text as="span" fontWeight="700" color="summer-gold.500">
          Marsya Mutiara Andira!
        </Text>{" "}
        ( XII MIPA 2). Your check-in to the{" "}
        <Text as="span" color="summer-gold.500">
          prompt 2 with love event
        </Text>{" "}
        has been successful!
      </Text> */}
      <Flex flexDir="column" alignItems="center">
        <Heading textAlign="center">Welcome</Heading>
        <Text textAlign="center" color="summer-gold.500" fontWeight={700}>
          Muhammad Ansari Christiani
        </Text>
        <Text
          fontSize="10px"
          textAlign="center"
          color="gray.500"
          fontWeight={500}
        >
          Your check in has been successful
        </Text>
      </Flex>
      <Flex flexDir="column" alignItems="center" gap="10px">
        <Image w="50%" src="./assets/performer.webp" alt="performer prompt" />
        <Heading as="h4" fontSize="16px">
          24/06/2022
        </Heading>
        <Flex mt="8px" flexDir="column" alignItems="center">
          <Text mb="8px" color="gray.400" fontWeight={500}>
            Trans Luxury Hotel Bandung
          </Text>
          <Text fontSize="10px" color="gray.500" fontWeight={400}>
            Jl. Gatot Subroto No. 289
          </Text>
          <Text fontSize="10px" color="gray.500" fontWeight={400}>
            Kec. Batununggal Kota Bandung
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Presensi;
