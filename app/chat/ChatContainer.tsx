'use client';

import { useState } from 'react';
import { MessageProps, ChatContainerProps } from '@/app/chat/types';
import Welcome from '@/app/chat/components/Welcome';
import ChatMessages from '@/app/chat/components/ChatMessages';
import ChatInput from '@/app/chat/components/ChatInput';
import ChatHeader from '@/app/chat/components/ChatHeader';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function ChatContainer({ onMenuClick }: ChatContainerProps) {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: MessageProps = { id: Date.now().toString(), role: 'user', content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // 나중에 실제 API 호출로 대체될 부분
      await new Promise((resolve) => setTimeout(resolve, 100));
      const reply = `"${input}"에 대한 내 생각은 이렇다. 시시한 고민은 집어치우고, 지금 당장 스쿼트 100개부터 시작해라.`;
      const assistantMessage: MessageProps = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: reply,
      };
      setMessages([...newMessages, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestionText: string) => {
    console.log('메시지 오는지 테스트 :', suggestionText);
    // 클릭된 텍스트로 바로 메시지를 전송
    handleSend(suggestionText);
  };

  return (
    <div className="relative h-full w-full flex flex-col">
      <header className="p-4 flex items-center gap-4 md:hidden border-b border-gray-700">
        <button onClick={onMenuClick}>
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-lg">기가채드</h1>
      </header>

      {messages.length > 0 && <ChatHeader />}

      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <Welcome onSuggestionClick={handleSuggestionClick} />
        ) : (
          <ChatMessages messages={messages} loading={loading} />
        )}
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 pb-4">
        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={() => handleSend(input)}
          loading={loading}
        />
        <p className="text-center text-xs text-gray-500 pt-2">
          기가채드는 정보 제공 시 실수를 할 수 있습니다. 중요한 정보는 꼭 다시 확인하세요.
        </p>
      </div>
    </div>
  );
}
