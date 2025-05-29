'use client';

import { ChatInputProps } from '@/app/chat/types';
import { PaperPlaneIcon, PlusIcon } from '@radix-ui/react-icons';

export default function ChatInput({ input, setInput, handleSend, loading }: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 border border-gray-700 rounded-2xl p-3 flex items-center gap-3 w-full"
    >
      <button type="button" className="p-2 hover:bg-gray-700 rounded-full">
        <PlusIcon className="w-5 h-5 text-gray-400" />
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="여기에 질문을 입력해주세요"
        className="flex-1 bg-transparent text-base placeholder-gray-500 text-white focus:outline-none"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !input.trim()}
        className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-600 disabled:bg-gray-700/50 disabled:cursor-not-allowed transition-all"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <PaperPlaneIcon className="w-5 h-5" />
        )}
      </button>
    </form>
  );
}
