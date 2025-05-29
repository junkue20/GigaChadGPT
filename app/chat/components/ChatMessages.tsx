'use client';
import { MessageProps } from '@/app/chat/types';
import { useEffect, useRef } from 'react';
import { ChatBotIcon } from '@/app/chat/components/ChatBotIcon';

interface Props {
  messages: MessageProps[];
  loading: boolean;
}

export default function ChatMessages({ messages, loading }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-800 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          {msg.role === 'assistant' && <ChatBotIcon />}
          {/* ✨ 사용자 메시지 버블 스타일 변경 */}
          <div
            className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
              msg.role === 'user'
                ? 'ml-auto bg-blue-600 text-white' // 사용자 메시지 색상 변경
                : 'mr-auto bg-gray-700 text-gray-200' // AI 메시지 색상 변경
            } whitespace-pre-wrap break-words`}
          >
            {msg.content}
          </div>
        </div>
      ))}

      {loading && (
        <div className="flex items-start gap-3 justify-start">
          <ChatBotIcon />
          <div className="mr-auto bg-gray-700 text-gray-200 max-w-[60%] rounded-2xl px-4 py-3 flex items-center gap-2">
            {/* <span className="text-gray-400">생각 중</span> */}
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
