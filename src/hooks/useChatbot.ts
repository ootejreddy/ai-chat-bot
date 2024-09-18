import { useState } from "react";
import { Message } from "../types";

export default function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", isBot: true },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (input: string) => {
    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm processing your request. Please wait a moment.",
          isBot: true,
        },
      ]);
      setIsTyping(false);
    }, 2000);
  };

  return { messages, isTyping, handleSend };
}
