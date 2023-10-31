import { Box, Text } from "@chakra-ui/react";
import BrandText from "../components/ui/Typography/BrandText";
import BrandHeading from "../components/ui/Typography/BrandHeading";
import Image from "next/image";

const BlockWrapper = ({ el, length }) => {
    return (
        <div className="auto-height__block block" key={el.id}>
            <Box className="block__headercount">
                <Text className="block__id">{el.id}</Text> /{length}
            </Box>
            <BrandHeading variant="post_header" textAlign='right'>{el.title}</BrandHeading>
            <BrandText textAlign='right'>{el.description}</BrandText>
            <Image
                style={{ alignSelf: "center" }}
                src={el.img}
                alt={el.title}
                width={350}
                height={200}
                objectFit="cover"
            />
            <BrandText variant="link_text" textAlign='right'>развернуть описание</BrandText>
        </div>
    );
};

export default BlockWrapper;
