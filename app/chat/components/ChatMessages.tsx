'use client';
import { Message } from '@/app/chat/types';

interface Props {
  messages: Message[];
  loading: boolean;
}

export default function ChatMessages({ messages, loading }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white rounded-b-2xl ">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`
            ${
              msg.role === 'user'
                ? 'ml-auto bg-black text-white max-w-[80%] rounded-2xl px-4 py-3 shadow border border-gray-800'
                : 'mr-auto bg-transparent text-black dark:text-white max-w-[60%] rounded-2xl px-4 py-3'
            }
            whitespace-pre-line break-words
          `}
        >
          {msg.content}
        </div>
      ))}
      {loading && (
        <div className="mr-auto bg-gray-100 text-gray-500 px-4 py-2 rounded-2xl text-sm animate-pulse">
          기가채드 생각 중...
        </div>
      )}
    </div>
  );
}
