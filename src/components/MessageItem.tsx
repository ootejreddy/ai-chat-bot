import { Avatar } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";
import { Message } from "../types";

type MessageItemProps = {
  message: Message;
};

export default function MessageItem({ message }: MessageItemProps) {
  return (
    <div
      className={`flex items-start space-x-2 mb-4 ${
        message.isBot ? "" : "justify-end"
      }`}
    >
      {message.isBot && (
        <Avatar className="w-8 h-8">
          <Bot className="w-6 h-6 text-primary" />
        </Avatar>
      )}
      <div
        className={`p-3 rounded-lg ${
          message.isBot
            ? "bg-slate-100 text-gray-800"
            : "bg-[#007AFF] text-white"
        }`}
      >
        {message.text}
      </div>
      {!message.isBot && (
        <Avatar className="w-8 h-8">
          <User className="w-6 h-6 text-primary" />
        </Avatar>
      )}
    </div>
  );
}
