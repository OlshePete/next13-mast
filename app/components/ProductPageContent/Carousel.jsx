"use client";

import React, {useState} from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Link from "next/link";
import { BrandNavLeftIcon, BrandNavRightIcon } from "../CustomIcons";

// Settings for the slider
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
};

export default function Carousel({posts}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);
  const [arrow, setArrow] = useState(false)
  const top = useBreakpointValue({ base:"50%" });
  const side = useBreakpointValue({ base: "6px" });
function handleShowArrow(params) {
  if (!arrow) setArrow(true)
}
function handleHideArrow(params) {
  if (arrow) setArrow(false)
}
   return( <Box
      position={"relative"}
      w={'min(70vw,1200px)'}
      onMouseOver={handleShowArrow}
      onBlur={handleHideArrow}
      onMouseLeave={handleHideArrow}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {
        posts && <>
        </>
      }
      {/* Left Icon */}
      <IconButton
        className={`arrow ${arrow?'show':'hide'}`}
        aria-label="left-arrow"
        variant="slider_arrow"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BrandNavLeftIcon size="40px"/>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        className={`arrow ${arrow?'show':'hide'}`}
        aria-label="right-arrow"
        variant="slider_arrow"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BrandNavRightIcon size="40px"/>
      </IconButton>
      <Box
      position={"relative"}
      width={"100%"}
      overflow={"hidden"}
    >
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}  >
        {posts.map((post, index) => (
          <Box
            key={index}
            w={"100%"}
            h={'calc(100vh - 120px)'}
            px={8}
            display={'flex'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            
          >
            <Flex
            key={post.title + new Date().toISOString()}
            direction={"column"}
            w={"100%"}
            h={'100%'}
            align={"flex-end"}
            justify={'flex-start'}
            gap={10}
            p="40px"
          >
             <Heading as="h3" variant="post_header" bg={"brand.700"}>
              {post.title}
            </Heading>
            <Flex w={"100%"} justify={"space-between"}>
              <Flex justify={'flex-start'} align={'center'} flexGrow={1} w={'360px'} minH={'200px'}>
                <Image
                  boxSize="200px"
                  width={355}
                  height={200}
                  src={post.image}
                  alt={post.title}
                />
              </Flex>
                  {
                    post.text && post.text.map(t=>{
                      return <Text variant="post_text" key={post.title + new Date().toISOString()}>
                        {t}
                </Text>
                    })
                  }

                
            </Flex>
            <Flex w={'100%'} flexGrow={1} align={'center'}>

            <Button
              variant="products_link_more"
              as={Link}
              href={post.link}
              target="_blank"
              >
              Узнать про проект
            </Button>
              </Flex>
          </Flex>
          </Box>
        ))}
      </Slider>
    </Box></Box>
  );
}
