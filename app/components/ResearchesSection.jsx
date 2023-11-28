import { Box, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import BrandHeading from "./ui/Typography/BrandHeading";
import BrandText from "./ui/Typography/BrandText";
import BlockWrapper from "./SectionContent/BlockWrapper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
const ResearchesSection = ({list, title="Исследования", id="researches", subtitle ="Обработка естественного языка и компьютерное зрение", isRight=false}) => {
   const container = useRef(null);
  const item = useRef(null);
  const { scrollYProgress } = useScroll({
    target:container,
    offset:['start start', 'end end']
  })
  const top = useTransform(scrollYProgress,[0,1],['20vh','80vh'])
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top top", 
        end: "bottom bottom",
        markers: true,
      },
    });
    timeline
      .from(item.current, { marginTop:'60%' })
      .to(item.current, {  marginTop:'10%' })
    //   .to(item.current, { transform: "scaleX(0.5)", opacity:0  }, 0);
  }, []);

  return (
    <Flex as={motion.div} ref={container} className="section dark" id={id} style={{
      width:'100%'
    }}
    >
      <Box as={motion.div} flexGrow={1} width={'50vh'} h="100vh" position={'sticky'} style={{
        top
      }}  bottom={0} 
      > 
      <BrandHeading  minWidth={'100%'} ref={item} data-scroll textAlign={isRight?'right':'left'} >{title}</BrandHeading>
          <BrandText  data-scroll textAlign={isRight?'right':'left'}>
            {subtitle}
          </BrandText>
          </Box>
      <Box  flexGrow={1} width={'50vh'} minH="100vh" pt={'60px'} as={VStack} gap={'20px'} order={isRight?-1:'inherit'}>
          {
            list && list.map((block,index)=>{
              const targetScale = 1 - ((list.length - index) * 0.05)
              return <BlockWrapper
                isRight={isRight}
                key={block.title + index}
                el={block}
                length={list.length}
                id={index+1}
                progress={scrollYProgress}
                range={[index*0.25,1]}
                targetScale={targetScale}
              />
            })
          }</Box>
      
    </Flex>
  );
};

export { ResearchesSection };
