import { useState } from "react";
import { Box, Text, Input, Button, Heading } from "@chakra-ui/react";
const ContactsSection = () => {
  const [showMessageInput, setShowMessageInput] = useState(false);
  const [message, setMessage] = useState("");
  const handleEmailClick = () => {
    setShowMessageInput(true);
  };
  const handleMessageSend = () => {
    // Handle sending the message here
    console.log("Sending message:", message);
    // Reset the input field and hide it
    setMessage("");
    setShowMessageInput(false);
  };
  return (
    <Box ml={40} mb={40}>
      <Heading variant="sub_header" py={20} >
        Контакты
      </Heading>
      <Text py={10} fontSize={'2xl'} color={'white'}>Санкт-Петербург, наб. Кутузова, 22, к. 31</Text>
      <Text py={10} fontSize={'2xl'} color={'white'}>+7 (812) 386-76-61</Text>
      {showMessageInput ? (
        <Box py={10}>
          <Input
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button mt={2} onClick={handleMessageSend}>
            Send
          </Button>
        </Box>
      ) : (
        <Text
          py={10}
          fontSize={'2xl'}
          color="white"
          cursor="pointer"
          onClick={handleEmailClick}
          as='u'
        >
          mast@eu.spb.ru
        </Text>
      )}
    </Box>
  );
};
export { ContactsSection };
