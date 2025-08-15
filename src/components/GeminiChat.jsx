// GeminiChat.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { MessageCircleIcon } from './icons';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbot = () => setIsOpen((p) => !p);

  const sendMessage = async () => {
    if (input.trim() === '') return;
    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE}/api/gemini/ask`, { prompt: input });
      const aiResponseText = response.data.text;
      setMessages((prev) => [...prev, { role: 'model', text: aiResponseText }]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: 'model', text: `Error: ${e.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-xl hover:bg-blue-700 transition duration-300 z-50 animate-bounce"
        aria-label="Open Chatbot"
      >
        <MessageCircleIcon className="w-8 h-8" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 md:w-96 h-[400px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200 overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="text-lg font-semibold">ServiceHub Assistant</h3>
            <button onClick={toggleChatbot} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center text-sm">Hi there! How can I help you today?</p>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`mb-3 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${msg.role === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none">
                  <span className="animate-pulse">Typing...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex rounded-full border border-gray-300 overflow-hidden shadow-sm focus-within:border-blue-500">
              <input
                type="text"
                className="flex-1 px-4 py-2 outline-none text-gray-800"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isLoading) sendMessage();
                }}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                className={`bg-blue-600 text-white px-4 py-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'} transition duration-300`}
                disabled={isLoading}
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiChat;