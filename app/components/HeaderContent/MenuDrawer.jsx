'use client'
import React from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/modal";
import Image from "next/image";
// import Link from "next/link";
import { CustomCloseIcon } from "../CustomIcons";
// import { useDisclosure } from "@chakra-ui/react";

const NAV_ITEMS = [
  {
    name: "главная",
    href: "",
  },
  {
    name: "исследования",
    href: "block-research",
  },
  {
    name: "обучение",
    href: "block-training",
  },
  {
    name: "разработка",
    href: "block-developing",
  },
  {
    name: "о центре",
    href: "about",
  },
  {
    name: "контакты",
    href: "contacts",
  },
];

const MenuDrawer = ({ isOpen, onToggle }) => {
  // const  = useDisclosure();
console.log("###",isOpen);
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      variant="brand"
      onClose={onToggle}
      size={"full"}
      py={"50px"}
    >
      <DrawerContent
        bg="rgba(0,0,0,.35)"
        backdropFilter={"blur(12px)"}
        color="white"
        position="relative"
      >
        <DrawerBody
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={"50px"}
        >
          <Box onClick={onToggle} position="absolute" top="50px" right="50px">
            <CustomCloseIcon />
          </Box>
          <Box h="100%" pt="150px">
            <Image
              src="/logo-full-rus.svg"
              alt="Next.js Logo"
              width={337}
              height={196}
              alignSelf="flex-start"
              priority
            />
          </Box>

          <Stack>
            {NAV_ITEMS.map((item) => (
              <Text
                onClick={()=>onToggle()}
                as={'a'}
                href={'#'+item.href}
                variant="nav_link"
                key={item.name}
                textTransform={"uppercase"}
              >
                {item.name}
              </Text>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export { MenuDrawer };
