"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AnimatedSVG } from "../../components/HeaderContent/AnimatedSVG";
import { useScrollTracker } from "../useScrollTracker";
import { useScroll } from "framer-motion";
const HeaderLogo = () => {
  const { scrollY } = useScroll();

  const isScrolling = useScrollTracker();
  return (
    <Flex
      flex={{ base: 1 }}
      pt={["8px","8px","12px"]}
      position={'relative'}
      // right={[0,'68px',0]}
      top={'8px'}
      // justify="start"
      className={isScrolling ? "hide" : "show"}
      // transform={['scale(0.8)','scale(1)']}
    >
      <AnimatedSVG scrollY={scrollY > 300 ? 300 : scrollY} />
    </Flex>
  );
};

export { HeaderLogo };
