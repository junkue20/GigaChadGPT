// ✨ Message 타입에 id 속성 추가
export interface MessageProps {
  id: string; // 고유 ID
  role: 'user' | 'assistant';
  content: string;
}

// ChatInput을 위한 Props (기존 코드와 호환되도록 유지)
export interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  handleSend: () => void;
  loading: boolean;
}

export interface ChatContainerProps {
  onMenuClick: () => void;
}

// 채팅 전 SuggestionCard의 props 타입 정의
export interface SuggestionCardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
}

// Welcome 컴포넌트의 props 타입 정의
export interface WelcomeProps {
  onSuggestionClick: (text: string) => void;
}
