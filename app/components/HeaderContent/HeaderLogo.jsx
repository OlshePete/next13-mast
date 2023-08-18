"use client";
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { HeaderLogoIcon } from "../CustomIcons";

const HeaderLogo = () => {
  return (
    <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
      <HeaderLogoIcon show={true} isdark={false} />
    </Flex>
  )
}

export {HeaderLogo}