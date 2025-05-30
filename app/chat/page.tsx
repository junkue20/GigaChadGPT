'use client';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatContainer from './ChatContainer';

// ✨ 모바일 화면 너비 기준점
const MOBILE_BREAKPOINT = 768;

export default function ChatPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const currentScreenWidth = window.innerWidth;

    if (currentScreenWidth < MOBILE_BREAKPOINT) {
      setSidebarOpen(false);
    } else {
      const savedSidebarState = localStorage.getItem('sidebarStatePC');
      if (savedSidebarState !== null) {
        setSidebarOpen(JSON.parse(savedSidebarState));
      } else {
        setSidebarOpen(false);
      }
    }
  }, []);

  // isSidebarOpen 상태가 변경될 때마다 localStorage에 저장 (PC 환경에서만)
  useEffect(() => {
    const currentScreenWidth = window.innerWidth;
    if (currentScreenWidth >= MOBILE_BREAKPOINT) {
      localStorage.setItem('sidebarStatePC', JSON.stringify(isSidebarOpen));
    }
  }, [isSidebarOpen]);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main
        className={`
          flex-1 h-screen flex flex-col 
          transition-all duration-300 ease-in-out 
          ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'} 
        `}
      >
        <ChatContainer onMenuClick={toggleSidebar} />
      </main>
    </div>
  );
}
