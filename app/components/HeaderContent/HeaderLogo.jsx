"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AnimatedSVG } from "../../components/HeaderContent/AnimatedSVG";
import { useScrollTracker } from "../useScrollTracker";
const HeaderLogo = () => {

  const isScrolling = useScrollTracker();
  return (
    <Flex
      flex={{ base: 1 }}
      pt={["8px","8px","12px"]}
      position={'relative'}
      top={'8px'}
      className={isScrolling ? "hide" : "show"}
    >
      <AnimatedSVG />
    </Flex>
  );
};

export { HeaderLogo };
