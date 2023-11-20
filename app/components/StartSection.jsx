import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import { useScroll } from "framer-motion";
import { MotionBox } from "./MotionBox";
import BrandText from "./ui/Typography/BrandText";
import BrandHeading from "./ui/Typography/BrandHeading";

const StartSection = () => {
  // const { scrollY } = useScroll();
  return (
    <Box
      className="section dark"
      id="start"
      // display="flex"
      // flexDirection={["row","row","column"]}
      // justifyContent={'flex-end'}
      minH={`100vh`}
      maxH={`100vh`}
    >
      <Box
        position="absolute"
        data-scroll
        data-scroll-speed="0.6"
        // className="start_cover_image"
        top={0}
        zIndex={100}
        right={0}
        w={["100vw", "100vw", "100vw", "50vw"]}
        h="100vh"
        bg="linear-gradient(135deg, rgba(34, 53, 111, 0.6), rgba(34, 53, 111, 0.6)),linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('/start-image.png') center/cover"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      />

      <BrandHeading
        variant="main_header"
        position={"relative"}
        zIndex={101}
        paddingTop={"max(40vh, 240px)"}
        color="white"
        data-scroll
        data-scroll-speed="1.2"
      >
        Прикладной центр машинного обучения,
        <br /> анализа данных и статистики
      </BrandHeading>
    </Box>
  );
};

export { StartSection };
