"use client";
import dynamic from "next/dynamic";

// Load the heavy chatbot lazily on the client side only to reduce the
// initial bundle and speed up rendering. Must live in a Client Component.
const Chatbot = dynamic(() => import("@/components/Chatbot/Chatbot"), {
  ssr: false,
});

export default function ChatbotLoader() {
  return <Chatbot />;
}
