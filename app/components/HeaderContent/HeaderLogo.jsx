"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AnimatedSVG } from "../../components/HeaderContent/AnimatedSVG";
const HeaderLogo = () => {

  return (
    <Flex
      flex={{ base: 1 }}
      // pt={["8px","8px","12px"]}
      position={'static'}
      top={'8px'}
    >
      <AnimatedSVG />
    </Flex>
  );
};

export { HeaderLogo };
