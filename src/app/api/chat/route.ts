import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages.map((message: { isBot: boolean; text: string }) => ({
        role: message.isBot ? "assistant" : "user",
        content: message.text,
      })),
    });

    const reply = completion.choices[0].message?.content;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "There was an error processing your request" },
      { status: 500 }
    );
  }
}
