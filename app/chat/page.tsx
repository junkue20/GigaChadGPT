'use client';

import { useState } from 'react';
import Sidebar from '@/app/chat/components/Sidebar';
import ChatContainer from '@/app/chat/ChatContainer';

export default function ChatPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 h-screen flex flex-col">
        <ChatContainer onMenuClick={() => setSidebarOpen(true)} />
      </main>
    </div>
  );
}
