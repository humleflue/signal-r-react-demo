import { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import useChatHub from "./hooks/useChatHub";

export default function InnerApp() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const { sendMessage, latestMessage } = useChatHub();

  function handleSendMessage() {
    sendMessage({ user, message });
    setMessage("");
    setUser("");
  }

  return (
    <Center mt={10}>
      <Box maxW="500px">
        <FormControl mb={5}>
          <FormLabel mb={2}>User</FormLabel>
          <Input
            placeholder="Enter user name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </FormControl>
        <FormControl mb={5}>
          <FormLabel mb={2}>Message</FormLabel>
          <Input
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" w="100%" onClick={handleSendMessage}>
          Send message
        </Button>
        <Center>
          <Text mt={2}>
            {latestMessage?.user} says {latestMessage?.message}
          </Text>
        </Center>
      </Box>
    </Center>
  );
}
