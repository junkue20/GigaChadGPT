'use client';
import { useState } from 'react';
import ChatHeader from '@/app/chat/components/ChatHeader';
import ChatMessages from '@/app/chat/components/ChatMessages';
import ChatInput from '@/app/chat/components/ChatInput';
import { Message } from '@/app/chat/types';

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '헤이, 준삣삐. 오늘은 어떤 고민때문에 날 불렀지?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const reply = data.reply || '응답 오류: 기가채드도 버퍼링 중이다.';

      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('❌ API 오류 발생:', err);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: '기가채드가 말문이 막혔다. 시스템을 확인해라.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl min-h-screen flex flex-col mx-2 sm:mx-0">
      <ChatHeader />
      <ChatMessages messages={messages} loading={loading} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} loading={loading} />
    </div>
  );
}
