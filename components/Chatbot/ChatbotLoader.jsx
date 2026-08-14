"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/Chatbot/Chatbot"), {
  ssr: false,
});

export default function ChatbotLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let timer;
    const loadBot = () => {
      setShouldLoad(true);
      removeListeners();
    };

    const removeListeners = () => {
      ['scroll', 'touchstart', 'mousemove', 'click'].forEach((event) => {
        window.removeEventListener(event, loadBot);
      });
    };

    ['scroll', 'touchstart', 'mousemove', 'click'].forEach((event) => {
      window.addEventListener(event, loadBot, { once: true, passive: true });
    });

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        timer = setTimeout(loadBot, 3500);
      });
    } else {
      timer = setTimeout(loadBot, 4000);
    }

    return () => {
      removeListeners();
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!shouldLoad) return null;

  return <Chatbot />;
}

