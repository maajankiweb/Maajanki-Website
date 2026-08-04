"use client";
import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Detect if user message contains an email or phone number and save to MongoDB
    const emailMatch = userMessage.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = userMessage.match(/(\+?\d{1,4}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}|\d{10}/);
    if (emailMatch || phoneMatch) {
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailMatch ? emailMatch[0] : "N/A",
          phone: phoneMatch ? phoneMatch[0] : "N/A",
          service: "AI Chatbot Inquiry",
          source: "chatbot",
          message: `Chatbot User Query: ${userMessage}`
        })
      }).catch(err => console.error("Chatbot lead error:", err));
    }

    // update chat history with user's msg
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    // Add a "thinking..." placeholder for the bot's response.
    setTimeout(() =>
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]), 600);

    // Call the function to generate the bot's response.
    generateBotResponse([...chatHistory, { role: "user", text: `using the details provided above, please address this query: ${userMessage}` }]);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
      <button type="submit" aria-label="Send message"><FaArrowUp /></button>
    </form>
  );
};

export default ChatForm;
