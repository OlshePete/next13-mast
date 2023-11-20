"use client";
import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { ProductBlock } from "./ProductBlock";
import BlockWrapper from "../SectionContent/BlockWrapper";
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
    <Flex >
      <Flex
        minW={"50vw"}
        h={"90vh"}
        alignItems={"center"}
        // position={"sticky"}
        // top={"50px"}
        display={['none','none','flex']}
        direction={['column','column','row']}
        bg={'red'}
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
        gap={10}
        position={"sticky"}
        top={"50px"}
        flexGrow={10}
        align={'center'}
        // bg="rgba(0,0,0,0)"
        p={{base:"250px 0",md:"150px 60px"}}
      >
        {PROD_ITEMS_LIST.map((item, index) =>
        <BlockWrapper
          index={index}
          el={item}
          key={"block " + item.name + index}
        />)}
      </Flex>
    </Flex>
  );

}

export { ProductContent };
