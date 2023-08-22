import { IconButton } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import { BrandDownIcon } from "./CustomIcons";
import { useScroll } from "framer-motion";
import { MotionBox } from "./MotionBox";

const StartSection = () => {
  const {scrollY} = useScroll({
    offset: [0, 200],
  })

  return (
    <Box
      className="section dark"
      display='flex'
      flexDirection='column'
      // position='relative'
    >
      <Box
        position="absolute"
        className="start_cover_image"
        top={0}
        right={0}
        pt={5}
        w="50vw"
        h="100vh"
        bg="linear-gradient(135deg, rgba(34, 53, 111, 0.6), rgba(34, 53, 111, 0.6)),linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('/start-image.png') center/cover"     
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      />
      <MotionBox as={Heading} variant="main_header" size='2xl'pt={'120px'} className={scrollY.get()>=50?'unviewed':''} >Прикладной центр машинного обучения, анализа данных и статистики</MotionBox>
      <IconButton
      as='a'
        href='#products'
        variant="no_bg"
        aria-label='Scroll down'
        position='absolute' 
        transition={"all 2s ease-in-out"}
        top={'calc(100vh - 120px)'}
        icon={<BrandDownIcon />}
        className={scrollY.get()>=100?'unviewed':''}
        />
      {/* <hr class="colored"></hr> */}
    </Box>
  );
};

export { StartSection };
