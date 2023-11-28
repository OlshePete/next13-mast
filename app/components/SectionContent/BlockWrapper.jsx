import { Box, Center, HStack, Text } from "@chakra-ui/react";
import BrandText from "../ui/Typography/BrandText";
import BrandHeading from "../ui/Typography/BrandHeading";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion,useTransform } from "framer-motion";
const BlockWrapper = ({ el, length, id, isRight, progress, range, targetScale  }) => {
    const { title, description, img } = el;
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
        target:container,
        offset:['start end', 'start start']
    })
    const scaleImage = useTransform(scrollYProgress,[0,1],[1.4,1])
    const scale = useTransform(progress, range,[1,targetScale])
    return (
        <Box 
        as={motion.div} ref={container} 
        style={{
            scale,
        }}
        className="auto-height__block block" 
        data-scroll data-scroll-offset='30% 200'
        sx={{
            // scale:scale,
            width:"100%",
            minHeight:'100vh',
            background:'#22356f',
            // position:'relative',
            padding:'0 50px 0 25px',
            display:'flex',
            flexDirection:'column',
            gap:'50px',
            position: 'sticky',
            top: isRight?28:20,
        }}>
            <HStack justify={'space-between'} flexDirection={isRight?"row-reverse":'row'}>
                <Box className="block__headercount" >
                    <Text className="block__id">{id}</Text> /{length}
                </Box>
                <BrandHeading variant="post_header" textAlign={!isRight?'right':'left'}>{title}</BrandHeading>
            </HStack>
            <BrandText textAlign={isRight?'right':'left'}>{description}</BrandText>
            <Center pt={'30px'}>
                <motion.div style={{
                    scale:scaleImage
                }}>

            <Image
                style={{ alignSelf: "center" }}
                src={img}
                alt={title}
                width={400}
                height={225}
                objectFit="cover"
            />
                </motion.div>

            </Center>

            {/* <BrandText variant="link_text" textAlign='right'>развернуть описание</BrandText> */}
        </Box>
    );
};

export default BlockWrapper;
