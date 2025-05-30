'use client';

import {
  PlusIcon,
  QuestionMarkCircledIcon,
  GearIcon,
  Cross1Icon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void; // ✨ toggleSidebar prop 추가
}

export default function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 md:hidden" onClick={toggleSidebar}></div>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-800 p-4 flex flex-col z-40
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-end md:hidden mb-4">
          <button onClick={toggleSidebar} className="p-1">
            <Cross1Icon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1">
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 w-full text-left">
            <PlusIcon className="w-5 h-5" />
            <span>새 채팅</span>
          </button>
          <h2 className="text-xs font-semibold text-gray-400 mt-6 mb-2 px-2">최근</h2>
          <a href="#" className="block p-2 rounded-lg hover:bg-gray-700 text-sm truncate">
            기가채드 페르소나, 뭘 도와줄까?
          </a>
        </div>
        <div className="mt-auto">
          <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 text-sm">
            <QuestionMarkCircledIcon className="w-5 h-5" />
            <span>도움말</span>
          </a>
          <a href="#" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 text-sm">
            <GearIcon className="w-5 h-5" />
            <span>설정</span>
          </a>
          <a
            href="https://www.instagram.com/only_one_gpt/"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 text-sm"
          >
            <DotFilledIcon className="w-5 h-5" />
            <span>만든이 @only_one_gpt</span>
          </a>
        </div>
      </aside>
    </>
  );
}
