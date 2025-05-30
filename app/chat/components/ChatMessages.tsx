'use client';

import { useEffect, useRef } from 'react';
import { ChatMessagesProps } from '../types';
import { ScrollArea } from 'components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ChatMessages({ messages, loading }: ChatMessagesProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    viewportRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <ScrollArea className="flex-1 bg-gray-900 h-full">
      <div className="w-full md:max-w-3xl md:mx-auto space-y-4 p-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[100%] rounded-tl-3xl rounded-tr-md rounded-bl-3xl rounded-br-3xl px-4 py-3 shadow-sm whitespace-pre-wrap break-words
                prose prose-sm prose-invert  ${
                  msg.role === 'user' ? 'ml-auto bg-blue-600 text-white' : 'mr-auto text-gray-200'
                } whitespace-pre-wrap`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {/* 기가채드 채팅 로딩 */}
        {loading && (
          <div className="flex items-start gap-3 justify-start">
            <div className="mr-auto text-gray-200 max-w-[90%] rounded-2xl px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-1s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.5s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={viewportRef} />
      </div>
    </ScrollArea>
  );
}
