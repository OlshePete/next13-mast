"use client";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HeaderLogoIcon } from "../CustomIcons";
import { AnimatedSVG } from "../../components/HeaderContent/AnimatedSVG";
import { useScrollTracker } from "../useScrollTracker";
import { useScroll } from "framer-motion";
const HeaderLogo = ({}) => {
  const { scrollY } = useScroll();

  const isScrolling = useScrollTracker();
  console.log(isScrolling);
  return (
    <Flex
      flex={{ base: 1 }}
      pt={["8px","8px","50px"]}
      position={'relative'}
      right={['28px','68px',0]}
      top={'-16px'}
      justify="start"
      className={isScrolling ? "unviewed" : "viewed"}
      transform={['scale(0.6)','scale(0.6)','scale(1)']}
    >
      <AnimatedSVG scrollY={scrollY > 300 ? 300 : scrollY} />
    </Flex>
  );
};

export { HeaderLogo };
