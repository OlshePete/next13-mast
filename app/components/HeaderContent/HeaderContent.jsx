'use client'
import { Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {HeaderLogo} from './HeaderLogo'
import {HeaderMenuIcon} from './HeaderMenuIcon'
import {MenuDrawer} from './MenuDrawer'
function HeaderContent({scrollY}) {
  const { isOpen, onToggle } = useDisclosure();
console.log("scrollY",scrollY)
  return (
    <Box height={200-scrollY+'px'} flexGrow={1}>
    <HeaderLogo scrollY={scrollY}/>
    <HeaderMenuIcon isOpen={isOpen} onToggle={onToggle}/>
    <MenuDrawer  isOpen={isOpen} onToggle={onToggle}/>
    </Box>
  )
}

export {HeaderContent}