import { Box, Flex, Image } from "@chakra-ui/react";
import { BORDER, RADIUS } from "@presensi/styles/theme.utility";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <Flex flexDir="column">
      <Flex flexDir="column" alignItems="center" justifyContent="center">
        <Box
          w={{ base: "full", sm: "75%", lg: "50%" }}
          minH="100vh"
          bg="rgba(0, 0, 0, 0.5)"
          border={BORDER.DEFAULT}
          rounded={RADIUS.SM}
          position="relative"
        >
          <Image
            src="./assets/background-invitation.webp"
            alt="image"
            position="absolute"
          />
          <Flex
            top="0"
            position="relative"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            pt="20px"
            textAlign="center"
            color="white"
            p="40px"
          >
            ASD
          </Flex>
          <Box zIndex="1" p="100px">
            {children}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default BaseLayout;
