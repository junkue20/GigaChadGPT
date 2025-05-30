'use client';

import { useRef, useEffect, KeyboardEvent } from 'react';
import { PaperPlaneIcon, PlusIcon } from '@radix-ui/react-icons';
import { ChatInputProps } from '../types';

export default function ChatInput({ input, setInput, handleSend, loading }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    handleSend();
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [input]);
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!loading && input.trim()) {
        handleSubmit(e);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 border border-gray-700 rounded-2xl p-3 flex items-end gap-3 w-full"
    >
      <button type="button" className="p-2 hover:bg-gray-700 rounded-full self-end mb-1">
        <PlusIcon className="w-5 h-5 text-gray-400" />
      </button>
      <textarea
        ref={textareaRef}
        rows={1}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="여기에 질문을 입력해주세요"
        className="flex-1 bg-transparent text-base placeholder-gray-500 text-white focus:outline-none resize-none overflow-y-auto min-h-[40px] max-h-64 py-[7px] px-1
                   transition-all duration-200 ease-in-out"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !input.trim()}
        className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-600 disabled:bg-gray-700/50 disabled:cursor-not-allowed transition-all self-end"
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
