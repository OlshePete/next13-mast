import { Box, Text } from "@chakra-ui/react";
import BrandText from "../ui/Typography/BrandText";
import BrandHeading from "../ui/Typography/BrandHeading";
import Image from "next/image";

const BlockWrapper = ({ el, length }) => {
    const { id, title, description, img } = el;
    return (
        <div className="auto-height__block block">
            <Box className="block__headercount">
                <Text className="block__id">{id}</Text> /{length}
            </Box>
            <BrandHeading variant="post_header" textAlign='right'>{title}</BrandHeading>
            <BrandText textAlign='right'>{description}</BrandText>
            <Image
                style={{ alignSelf: "center" }}
                src={img}
                alt={title}
                width={350}
                height={200}
                objectFit="cover"
            />
            <BrandText variant="link_text" textAlign='right'>развернуть описание</BrandText>
        </div>
    );
};

export default BlockWrapper;
