'use client';
export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white/90 sticky top-0 z-20 rounded-t-2xl shadow-sm">
      <div className="flex items-center gap-2">
        <button className="rounded-full bg-gray-200 w-9 h-9 flex items-center justify-center font-bold">
          Aied
        </button>
        <span className="font-bold text-lg">기가채드</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="rounded-full bg-gray-100 px-3 py-1 text-xs">공유</button>
        <button className="rounded-full bg-gray-100 px-3 py-1 text-xs">더보기</button>
      </div>
    </header>
  );
}
