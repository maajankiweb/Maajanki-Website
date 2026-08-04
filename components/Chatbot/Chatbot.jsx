"use client";
import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { companyInfo } from "./companyInfo";
import { FaCommentDots, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Chatbot.css";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "system",
      text: companyInfo
    },
  ]);

  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const suggestions = [
    { label: "🌐 Web Dev", text: "What website design and development services do you offer?" },
    { label: "🚀 SEO Growth", text: "How can you help rank my website on Google using SEO?" },
    { label: "💰 Pricing", text: "What are your starter and pro packages and their pricing?" },
    { label: "📞 Contact CEO", text: "How can I contact CEO Ashish Kumar or get a free quote?" }
  ];

  const generateBotResponse = async (history) => {
    // helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text, isError }
      ]);
    };

    // The API key never reaches the client. All chat requests are proxied
    // server-side through public/chat-proxy.php, which reads NVIDIA_API_KEY
    // from the server environment.
    const api_url = process.env.NEXT_PUBLIC_CHAT_PROXY_URL || "/api/chat";
    const model = process.env.NEXT_PUBLIC_NVIDIA_MODEL || "openai/gpt-oss-120b";

    // Transform local history array to OpenAI format expected by Nvidia API
    const messages = history.map(({ role, text }) => ({
      role: role === "system" ? "system" : role === "model" ? "assistant" : "user",
      content: text
    }));

    const requestBody = {
      model: model,
      messages: messages,
      temperature: 1,
      top_p: 1,
      max_tokens: 1024,
      stream: false
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    };

    try {
      const response = await fetch(api_url, requestOptions);
      
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || `Request failed with status ${response.status}`);
      }

      if (!response.ok) throw new Error(data?.error?.message || "Something went wrong!");

      const apiResponseText = data?.choices?.[0]?.message?.content?.trim() || "No response generated.";
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  const handleSuggestionClick = (suggestionText) => {
    // update chat history with user's click query
    setChatHistory((history) => [...history, { role: "user", text: suggestionText }]);

    // Add a "thinking..." placeholder
    setTimeout(() =>
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]), 600);

    // Fetch response using the suggestion query
    generateBotResponse([...chatHistory, { role: "user", text: `using the details provided above, please address this query: ${suggestionText}` }]);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  // Check if there is any user interaction history yet (excluding the system instruction)
  const hasUserInteraction = chatHistory.filter(msg => msg.role !== "system").length > 0;

  return (
    <div className={`chatbot-container ${showChatbot ? 'show-chatbot' : ""}`}>
      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler" aria-label="Toggle chatbot">
        <span><FaCommentDots /></span>
        <span><FaTimes /></span>
      </button>

      <div className="chatbot-popup">
        {/* chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button onClick={() => setShowChatbot(prev => !prev)} aria-label="Minimize chatbot">
            <FaChevronDown />
          </button>
        </div>
        {/* chatbot body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Welcome to MaaJanki Web Tech! 🚀 <br /> How can we help you with web design, SEO, or digital marketing today?</p>
          </div>

          {/* Interactive Suggestion Chips */}
          {!hasUserInteraction && (
            <div className="suggestion-chips-container">
              <p className="suggestion-chips-title">Suggested Questions:</p>
              <div className="suggestion-chips">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    className="suggestion-chip"
                    onClick={() => handleSuggestionClick(sug.text)}
                  >
                    {sug.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        {/* chatbot footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          <div className="powered-by">Powered by <a href="https://www.maajankiwebtech.com/" target="_blank" rel="noopener noreferrer">MaaJanki Web Tech</a></div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
