'use client';

import { PlusIcon, QuestionMarkCircledIcon, GearIcon, Cross1Icon } from '@radix-ui/react-icons';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isSidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-4 flex flex-col z-40
                         transform transition-transform duration-300 ease-in-out
                         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                         md:static md:translate-x-0 md:w-64`}
      >
        <div className="flex items-center justify-between md:hidden">
          <span className="text-white font-bold">메뉴</span>
          <button onClick={() => setSidebarOpen(false)} className="p-2">
            <Cross1Icon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 mt-4 md:mt-0">
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
        </div>
      </aside>
    </>
  );
}
