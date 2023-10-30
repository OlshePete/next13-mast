import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import { useScroll } from "framer-motion";
import { MotionBox } from "./MotionBox";

const StartSection = () => {
  const { scrollY } = useScroll();

  return (
    <Box
      className="section dark"
      id="start"
      display="flex"
      flexDirection="column"
      justifyContent={'flex-start'}
      minH={`calc(100vh - ${250}px)!important`}
      maxH={`calc(100vh - ${350}px)!important`}
    >
      <Box
        position="fixed"
        className="start_cover_image"
        top={0}
        zIndex={100}
        right={0}
        w={['100vw','100vw','100vw',"50vw"]}
        h="100vh"
        bg="linear-gradient(135deg, rgba(34, 53, 111, 0.6), rgba(34, 53, 111, 0.6)),linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('/start-image.png') center/cover"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      />
      <MotionBox
        as={Heading}
        variant="main_header"
        zIndex={200}
        pt={{base:"140px",md:"250px"}}
        className={scrollY.get() >= 10 ? "hide" : "show"}
      >
        Прикладной центр машинного обучения, анализа данных и статистики
      </MotionBox>
    </Box>
  );
};

export { StartSection };
