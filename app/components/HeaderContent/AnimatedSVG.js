import { Link, Box, VStack, HStack } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { MotionBox } from "../MotionBox";
import { useEffect } from "react";
import { LogoBigDash, LogoEU, LogoMast, LogoYa } from "../CustomIcons";

const AnimatedSVG = ({ }) => {
  const { scrollY } = useScroll()
  // Определи начальное и к онечное состояния анимации
  const heightSizes = [200, 60];
  // const initialStyles = { opacity: 0 };
  // const targetStyles = { opacity: 1 };
  const height = useTransform(scrollY, [0, 320], heightSizes);
  // Определи анимацию

  useEffect(() => {
    height.set(200 + scrollY)
  }, [scrollY])

  const BoxLogo = ({ children }) => {
    return (
      <Box
        style={{
          position: "relative",
          height: height.get(),
          display: scrollY.get() < 200 ? "block" : "none",
        }}
        id="box_logo_change_color"
      >
        {children}
      </Box>
    )
  }

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
          width: "70%",
          position: "relative",
          height: height.get(),
        }}
      >
        <LogoMast />
      </Box>
      <HStack
        style={{
          overflow: 'hidden',
          alignItems: 'baseline',
          minHeight: '50px',
        }}
      >
        <Link href={'https://eusp.org/'} isExternal >
          <BoxLogo>
            <LogoEU />
          </BoxLogo>
        </Link>
        <BoxLogo >
          <LogoBigDash />
        </BoxLogo>
        <Link href={'https://ya.ru/'} isExternal>
          <BoxLogo>
            <LogoYa />
          </BoxLogo>
        </Link>
      </HStack>
    </MotionBox>
  );
};

export { AnimatedSVG };
