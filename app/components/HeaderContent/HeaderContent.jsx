'use client'
import { Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {HeaderLogo} from './HeaderLogo'
import {HeaderMenuIcon} from './HeaderMenuIcon'
import {MenuDrawer} from './MenuDrawer'

function HeaderContent() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box flexGrow={1} display={'flex'} justifyContent={'space-between'} >
    <HeaderLogo />
    <HeaderMenuIcon isOpen={isOpen} onToggle={onToggle}/>
    <MenuDrawer  isOpen={isOpen} onToggle={onToggle}/>
    </Box>
  )
}

export {HeaderContent}