import { Box, Center, HStack, Text } from "@chakra-ui/react";
import BrandText from "../ui/Typography/BrandText";
import BrandHeading from "../ui/Typography/BrandHeading";
import Image from "next/image";

const BlockWrapper = ({ el, length, id  }) => {
    const { title, description, img } = el;
    return (
        <Box className="auto-height__block block" 
        data-scroll data-scroll-offset='30% 200'
        sx={{
            width:"100%",
            minHeight:'80vh',
            position:'relative',
            padding:'0 50px 0 25px',
            display:'flex',
            flexDirection:'column',
            gap:'50px'
        }}>
            <HStack justify={'space-between'}>
            <Box className="block__headercount" >
                <Text className="block__id">{id}</Text> /{length}
            </Box>
            <BrandHeading variant="post_header" textAlign='right'>{title}</BrandHeading>
            </HStack>
            <BrandText textAlign='right'>{description}</BrandText>
            <Center pt={'30px'}>
            <Image
                style={{ alignSelf: "center" }}
                src={img}
                alt={title}
                width={400}
                height={225}
                objectFit="cover"
            />
            </Center>

            {/* <BrandText variant="link_text" textAlign='right'>развернуть описание</BrandText> */}
        </Box>
    );
};

export default BlockWrapper;
