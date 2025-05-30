'use client';

import { useEffect, useState } from 'react';
import { ChatContainerProps, MessageProps } from './types';
import ChatHeader from './components/ChatHeader';
import Welcome from './components/Welcome';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

// ✨ 모바일 화면 너비 기준점
const MOBILE_BREAKPOINT = 768;
export default function ChatContainer({ onMenuClick }: ChatContainerProps) {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const currentScreenWidth = window.innerWidth;
    if (currentScreenWidth < MOBILE_BREAKPOINT) setIsMobile(true);
    else setIsMobile(false);
  }, []);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: MessageProps = { id: Date.now().toString(), role: 'user', content: text };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // 나중에 실제 API 호출로 대체될 부분
      await new Promise((resolve) => setTimeout(resolve, 2500));
      const reply = `사람들의 내 내 봅니다. 까닭이요, 벌레는 나는 듯합니다. 아무 우`;
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

  // 클릭된 텍스트로 바로 메시지를 전송
  const handleSuggestionClick = (suggestionText: string) => {
    handleSend(suggestionText);
  };

  return (
    <div className="relative h-full w-full flex flex-col">
      <ChatHeader onMenuClick={onMenuClick} />

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
          기가채드는 정보 제공 시 실수를 할 수 있습니다.
          {!isMobile && ' 중요한 정보는 꼭 다시 확인하세요.'}
        </p>
      </div>
    </div>
  );
}
