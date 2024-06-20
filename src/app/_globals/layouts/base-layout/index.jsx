import { Box, Flex, Image } from "@chakra-ui/react";
import { BORDER, RADIUS } from "@presensi/styles/theme.utility";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <Flex flexDir="column">
      <Flex flexDir="column" alignItems="center" justifyContent="center">
        <Box
          w={{ base: "full", sm: "75%", lg: "50%" }}
          bg="rgba(0, 0, 0, 0.5)"
          position="relative"
        >
          <Image
            src="./assets/background-invitation.webp"
            alt="image"
            position="absolute"
            border={BORDER.DEFAULT}
            rounded={RADIUS.SM}
          />
          <Flex
            top="0"
            position="relative"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            pt={{ base: "100px", md: "200px" }}
            textAlign="center"
            color="white"
            px="40px"
          >
            <Image w="70%" src="./assets/logo-prom.webp" alt="image" />
          </Flex>
          <Box
            zIndex="10"
            pt={{ base: "20px", lg: "100px" }}
            px={{ base: "60px", sm: "70px", md: "110px" }}
          >
            {children}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BaseLayout;
