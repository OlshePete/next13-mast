import { useState, useEffect } from "react";
import { Box, Text, Heading, Tooltip, Wrap, VStack } from "@chakra-ui/react";
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
      <VStack spacing="45px" align={'start'} >
        <Text variant="paragraph">Санкт-Петербург, наб. Кутузова, 22, каб. 31</Text>
        <Text variant="paragraph">+7 (812) 386-76-61</Text>
        <Tooltip label="email скопирован" placement="top"
          isOpen={isOpen}>
          <Text width="fit-content" variant="paragraph" cursor="pointer" onClick={() => handleClick("ruscan@eu.spb.ru")}>ruscan@eu.spb.ru</Text>
        </Tooltip>
      </VStack>
    </Box>
  );
};
export { ContactsSection };
