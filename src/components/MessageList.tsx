import { ScrollArea } from "@/components/ui/scroll-area";
import MessageItem from "./MessageItem";
import TypingIndicator from "./TypingIndicator";
import { Message } from "../types";

type MessageListProps = {
  messages: Message[];
  isTyping: boolean;
};

export default function MessageList({ messages, isTyping }: MessageListProps) {
  return (
    <ScrollArea className="h-[500px] p-4">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
    </ScrollArea>
  );
}
