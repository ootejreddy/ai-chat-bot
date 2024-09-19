import { useState } from "react";
import { Message } from "../types";

export default function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", isBot: true },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (input: string) => {
    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, { text: input, isBot: false }],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I encountered an error. Please try again.",
          isBot: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, handleSend };
}
