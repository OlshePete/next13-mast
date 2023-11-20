import { Box, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";
import React, { useLayoutEffect, useRef } from "react";
import BrandHeading from "./ui/Typography/BrandHeading";
import BrandText from "./ui/Typography/BrandText";
import BlockWrapper from "./SectionContent/BlockWrapper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ResearchesSection = ({list}) => {
   const container = useRef(null);
  const item = useRef(null);
  useLayoutEffect(() => {
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
    <Flex ref={container} className="section dark" id="researches" style={{
      width:'100%'
    }}
    >
      <Box flexGrow={1} width={'50vh'} h="100vh" position={'sticky'} top={0}  bottom={0} 
      > 
      <BrandHeading ref={item} data-scroll  marginTop={'40%'} >Исследования</BrandHeading>
          <BrandText  data-scroll >
            Обработка естественного языка и компьютерное зрение
          </BrandText></Box>
      <Box  flexGrow={1} width={'50vh'} minH="100vh" pt={'60px'} as={VStack} gap={'20px'}>
          {
            list && list.map((block,index)=>{
              return <BlockWrapper
                key={block.title + index}
                el={block}
                length={list.length}
                id={index+1}
              />
            })
          }</Box>
      
    </Flex>
  );
};

export { ResearchesSection };
