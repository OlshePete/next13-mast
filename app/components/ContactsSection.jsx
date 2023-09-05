import { useState, useEffect } from "react";
import { Box, Text, Heading, Tooltip, VStack, Button } from "@chakra-ui/react";
const ContactsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      timeoutId = setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  const handleClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsOpen(true);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <Box className="section dark" mt={20}>
      <Heading variant="sub_header" py={20} >
        Контакты
      </Heading>
      <VStack spacing="45px" align={'start'}  px={20}  pt={20}>
        <Text variant="paragraph">Санкт-Петербург, наб. Кутузова, 22, каб. 31</Text>
        <Text variant="paragraph">+7 (812) 386-76-61</Text>
        <Tooltip
          label="email скопирован"
          placement="top"
          isOpen={isOpen}>
          <Button
            p={0}
            style={{
              m: 0,
              width: "fit-content",
              height: "0",
            }}
            onClick={() => handleClick("ruscan@eu.spb.ru")}
            _before={{
              content: `""`,
              position: "absolute",
              bottom: '-17px',
              left: '0',
              width: '100%',
              height: '1px',
              transform: 'scaleX(0)',
              background: 'brand.900',
              transformOrigin: 'right',
              transition: "transform 0.3s ease-in-out",
            }}
            _hover={{
              _before: {
                transform: 'scale(1)',
                transformOrigin: 'left',
              },
            }}
          >
            <Text variant="paragraph" p={0} m={0}>
              ruscan@eu.spb.ru
            </Text>
          </Button>
        </Tooltip>
      </VStack>
    </Box >
  );
};
export { ContactsSection };
