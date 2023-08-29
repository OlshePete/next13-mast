"use client";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const PROD_ITEMS_LIST = [
  {
    name: "исследования",
    color: "",
    href: "block-research",
  },
  {
    name: "обучение",
    color: "",
    href: "block-training",
  },
  {
    name: "разработка",
    color: "",
    href: "block-developing",
  },
];
function ProductContent() {
  function handleScrollToBlock(blockId) {
    document
      .getElementById(blockId)
      ?.scrollIntoView({ block: "end", behavior: "smooth" });
  }
  return (
    <Flex position={"sticky"} top={"50px"}>
      <Flex
        flexGrow={1}
        maxW={"auto"}
        h={"90vh"}
        alignItems={"center"}
        position={"sticky"}
        top={"50px"}
        display={['none','flex']}
      >
        <List spacing={6}>
          {PROD_ITEMS_LIST.map((item, index) => (
            <ListItem
              key={item.name + index}
              onClick={() => handleScrollToBlock(item.href)}
            >
              <Text
                variant="products_link"
                key={item.name}
                textTransform={"uppercase"}
              >
                {item.name}
              </Text>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Flex
        direction={"column"}
        gap={8}
        position={"sticky"}
        top={"50px"}
        flexGrow={10}
        bg="rgba(0,0,0,0)"
        p={{base:"250px 0",md:"150px 60px"}}
      >
        {PROD_ITEMS_LIST.map((item, index) => (
          <Box
            bg="rgba(0,0,0,0)"
            border={"3px solid white"}
            zIndex={1000 - index}
            position={"sticky"}
            top={"50px"}
            key={"block " + item.name + index}
            minH={"80vh"}
            id={item.href}
          >
            <Text
              key={item.name}
              color={"brand.800"}
              bg={"brand.700"}
              textTransform={"uppercase"}
            >
              {item.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export { ProductContent };
