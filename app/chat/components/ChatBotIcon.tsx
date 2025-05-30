import React from 'react';
import Image from 'next/image';

export function ChatBotIcon() {
  return (
    <div className="w-12 h-12 rounded-full flex-shrink-0 relative overflow-hidden">
      <Image
        src="/gigachad-face.jpg"
        alt="기가채드 프로필 아이콘"
        fill={true}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

export default ChatBotIcon;
