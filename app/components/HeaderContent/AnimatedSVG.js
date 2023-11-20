import { Link, Box, VStack, HStack } from "@chakra-ui/react";
import { useLayoutEffect, useRef } from "react";
import { LogoBigDash, LogoEU, LogoMast, LogoYa } from "../CustomIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const container = useRef(null);
  const logo_items = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top", 
        end: "+=800",
        markers: true,
      },
    });
    timeline
      .from(container.current, { transform: "scale(1)",right:'0px',top:"0px" })
      .to(container.current, { transform: "scale(0.5)",right:'75px',top:"-30px" })
      .to(logo_items.current, { transform: "scaleX(0.5)", opacity:0  }, 0);
  }, []);
  return (
    <Box
      as={VStack}
      ref={container}
      data-scroll
      data-scroll-offset="top, 20%"
      data-scroll-repeat
      style={{
        position:"relative",
        height: "200px",
        width: "340px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap:"20px",
        paddingTop:'20px'
      }}
    >
      <Box
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <LogoMast />
      </Box>
      <HStack
        ref={logo_items}
        style={{
          overflow: "hidden",
          alignItems: "center",
          gap: "10px",
          minHeight: "30px",
          maxHeight: "30px",
          width: "100%",
          padding: 0,
        }}
      >
        <BoxLogo>
          <Link href={"https://eusp.org/"} isExternal>
            <LogoEU />
          </Link>
        </BoxLogo>
        <LogoBigDash />
        <Link href={"https://ya.ru/"} isExternal>
          <BoxLogo>
            <LogoYa />
          </BoxLogo>
        </Link>
      </HStack>
    </Box>
  );
};

export { AnimatedSVG };
