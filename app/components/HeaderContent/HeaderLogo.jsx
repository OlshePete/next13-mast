"use client";
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { HeaderLogoIcon } from "../CustomIcons";
import { AnimatedSVG } from "../../components/HeaderContent/AnimatedSVG";

const HeaderLogo = ({scrollY}) => {
  console.log(scrollY)
  return (
      
    <Flex flex={{ base: 1 }} pt={'50px'} justify={{ base: "center", md: "start" }} >
      <AnimatedSVG scrollY={scrollY>300?300:scrollY}/>
    </Flex>
  )
}

export {HeaderLogo}