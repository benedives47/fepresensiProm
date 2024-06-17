import { Flex } from "@chakra-ui/react";
import React from "react";

const BaseLayout = ({ children }) => {
  return <Flex>{children}</Flex>;
};

export default BaseLayout;
