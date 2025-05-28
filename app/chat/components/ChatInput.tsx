'use client';
import { Props } from '@/app/chat/types';

export default function ChatInput({ input, setInput, handleSend, loading }: Props) {
  return (
    <div className="p-4 bg-white border-t border-gray-200 flex gap-2 rounded-b-2xl ">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="기가채드에게 물어봐..."
        className="flex-1 px-4 py-3 border border-gray-300 rounded-full text-sm md:text-base focus:outline-none bg-gray-50"
        disabled={loading}
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="px-5 py-3 bg-black text-white rounded-full text-sm md:text-base hover:scale-105 transition-all shadow-sm"
      >
        전송
      </button>
    </div>
  );
}
