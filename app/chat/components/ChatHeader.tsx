'use client';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ChatContainerProps } from '../types';
import ChatBotIcon from './ChatBotIcon';

export default function ChatHeader({ onMenuClick }: ChatContainerProps) {
  return (
    <header className="p-4 flex items-center gap-4 border-b border-gray-700">
      <button onClick={onMenuClick} className="p-lg">
        <HamburgerMenuIcon className="sm:w-6 sm:h-6 md:w-4 md:h-4" />
      </button>
      <ChatBotIcon />
      <h1 className="font-bold text-lg">기가채드</h1>
    </header>
  );
}
