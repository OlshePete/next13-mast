import React from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
} from "@chakra-ui/modal";
import Image from "next/image";
import Link from "next/link";
import { CustomCloseIcon } from "./CustomIcons";

const NAV_ITEMS = [
  {
    name: "главная",
    href: "",
  },
  {
    name: "исследования",
    href: "products",
  },
  {
    name: "обучение",
    href: "products",
  },
  {
    name: "разработка",
    href: "products",
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

const MenuDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      variant="brand"
      onClose={onClose}
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
          <Box onClick={onClose} position="absolute" top="50px" right="50px">
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
                onClick={()=>onClose()}
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
