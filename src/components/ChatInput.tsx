import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic } from "lucide-react";

type ChatInputProps = {
  onSend: (input: string) => void;
  onStartRecording?: () => void;
};

export default function ChatInput({
  onSend,
  onStartRecording,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="p-4 border-t">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <div className="relative flex-grow">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="pr-10"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={onStartRecording}
          >
            <Mic className="w-4 h-4" />
          </Button>
        </div>
        <Button
          type="submit"
          className="bg-[#007AFF] hover:bg-[#0056b3] text-white"
        >
          <Send className="w-4 h-4 mr-2" />
          Send
        </Button>
      </form>
    </div>
  );
}
