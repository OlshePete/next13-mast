import { IconButton } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import { BrandDownIcon } from "./CustomIcons";

const StartSection = () => {
  return (
    <Box
      className="section dark"
      display='flex'
      flexDirection='column'
      gap='50px'
      // position='relative'
    >
      <Box
        position="absolute"
        className="start_cover_image"
        top={0}
        right={0}
        w="50vw"
        h="100vh"
        bg="linear-gradient(135deg, rgba(34, 53, 111, 0.6), rgba(34, 53, 111, 0.6)),linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('/start-image.png') center/cover"     
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      />
      <Image
        src="/logo-full-rus.svg"
        alt="Next.js Logo"
        width={337}
        height={196}
        priority
      />
      <Heading variant="main_header" size='2xl'>Прикладной центр машинного обучения, анализа данных и статистики</Heading>
      <IconButton
      as='a'
        href='#products'
        variant="no_bg"
        aria-label='Scroll down'
        position='absolute' 
        top={'calc(100vh - 120px)'}
        icon={<BrandDownIcon />}
        />
      {/* <hr class="colored"></hr> */}
    </Box>
  );
};

export { StartSection };
