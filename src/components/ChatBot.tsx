"use client";

import { Card } from "@/components/ui/card";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import useChatbot from "../hooks/useChatbot";

export default function ChatBot() {
  const { messages, isTyping, handleSend } = useChatbot();

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold text-center">AI Chatbot</h2>
      </div>
      <MessageList messages={messages} isTyping={isTyping} />
      <ChatInput onSend={handleSend} />
    </Card>
  );
}
