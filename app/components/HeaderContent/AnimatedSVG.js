import { Link, Box, VStack, HStack } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { MotionBox } from "../MotionBox";
import { useEffect } from "react";
import { LogoBigDash, LogoEU, LogoMast, LogoYa } from "../CustomIcons";

const BoxLogo = ({ children, height, display }) => {
  return (
    <Box
      style={{
        position: "relative",
        height,
        display,
      }}
      id="box_logo_change_color"
    >
      {children}
    </Box>
  );
};
const AnimatedSVG = () => {
  const { scrollY } = useScroll();
  const heightSizes = [200, 100];
  const height = useTransform(scrollY, [0, 10], heightSizes);

  useEffect(() => {
    height.set(200 + scrollY);
  }, [scrollY]);

  console.log("scrollY",scrollY?.current,height.current )
  return (
    <MotionBox
      as={VStack}
      style={{
        position: "absolute",
        height: height.get(),
        alignItems: "flex-start",
      }}
    >
      <Box
        style={{
          width: "50%",
          position: "relative",
          height: height.get(),
        }}
      >
        <LogoMast />
      </Box>
      <HStack
        style={{
          display:height.get()===100?'none':'inherit',
          overflow: "hidden",
          alignItems: "flex-start",
          minHeight: "50px",
        }}
      >
        <Link href={"https://eusp.org/"} isExternal>
          <BoxLogo
            height={height.get()}
            display={scrollY.get() < 100 ? "block" : "none"}
          >
            <LogoEU />
          </BoxLogo>
        </Link>
        <BoxLogo
          height={height.get()}
          display={scrollY.get() < 100 ? "block" : "none"}
        >
          <LogoBigDash />
        </BoxLogo>
        <Link href={"https://ya.ru/"} isExternal>
          <BoxLogo
            height={height.get()}
            display={scrollY.get() < 100 ? "block" : "none"}
          >
            <LogoYa />
          </BoxLogo>
        </Link>
      </HStack>
    </MotionBox>
  );
};

export { AnimatedSVG };
