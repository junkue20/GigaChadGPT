// 메시지 타입
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// 입력창 타입
export interface Props {
  input: string;
  setInput: (val: string) => void;
  handleSend: () => void;
  loading: boolean;
}
