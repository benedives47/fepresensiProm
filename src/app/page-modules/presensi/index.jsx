import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Presensi = () => {
  return (
    <Flex py="20px" justifyContent="center" flexDir="column">
      <Text textAlign="center" my="20px">
        Welcome,{" "}
        <Text as="span" fontWeight="700" color="summer-gold.500">
          Marsya Mutiara Andira!
        </Text>{" "}
        Your check-in to the{" "}
        <Text as="span" color="summer-gold.500">
          prompt 2 with love event
        </Text>{" "}
        has been successful!
      </Text>
      <Image
        w={{ base: "40%", lg: "25%" }}
        src="./assets/logo-sman-2-bandung.png"
        alt="SMA Negeri 2 Bandung"
        mx="auto"
      />
      <Text
        variant="heading/h4"
        textAlign="center"
        mt="20px"
        color="summer-gold.500"
        fontWeight={700}
      >
        XII MIPA 2
      </Text>
    </Flex>
  );
};

export default Presensi;
