'use client';

import { useEffect, useState } from 'react';
import { SuggestionCardProps, WelcomeProps } from '@/app/chat/types';

const allSuggestions = [
  { title: '오늘 하루, 최고의 나로 사는 법', subtitle: '나태함에 지배당한 너에게 고한다' },
  { title: '남들의 시선에서 자유로워지는 법', subtitle: '네 인생의 주인공은 너 하나뿐이다' },
  { title: '가장 두려워하는 것에 도전하기', subtitle: '그 두려움의 끝을 직접 확인해봐라' },
  { title: '"나중에" 라고 말하는 비겁한 습관', subtitle: '지금 당장 시작할 변명을 없애주마' },
  { title: '무기력함이 나를 잠식할 때', subtitle: '스스로 불을 지피는 현실적인 방법' },
  { title: '인간관계, 다 끊어내고 싶을 때', subtitle: '누구를 남기고 누구를 버려야 할까' },
  { title: '내 안의 열등감 마주하기', subtitle: '그걸 무기가 아닌 연료로 쓰는 법' },
  { title: '3년 후, 내가 원하는 모습', subtitle: '그 목표를 향한 가장 확실한 첫걸음' },
];

const SuggestionCard = ({ title, subtitle, onClick }: SuggestionCardProps) => (
  // ✨ 2. props로 받은 onClick 함수를 버튼에 연결
  <button
    onClick={() => {
      console.log('SuggestionCard 버튼 자체는 클릭됨! 전달할 제목:', title);
      onClick();
    }}
    className="bg-gray-800 p-4 rounded-lg text-left w-full h-full hover:bg-gray-700 transition flex flex-col justify-between"
  >
    <div>
      <p className="text-gray-200 font-semibold">{title}</p>
      <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
    </div>
  </button>
);

export default function Welcome({ onSuggestionClick }: WelcomeProps) {
  const [suggestions, setSuggestions] = useState<{ title: string; subtitle: string }[]>([]);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // 사용자 정보 로딩 (가짜 데이터)
    const fetchUser = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const loggedInUserName = 'O삣삐';
      setUserName(loggedInUserName);
    };
    fetchUser();

    // 제안 랜덤 선택
    const shuffled = [...allSuggestions].sort(() => 0.5 - Math.random());
    setSuggestions(shuffled.slice(0, 4));
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          {userName ? (
            `${userName}님, 안녕하세요`
          ) : (
            <span className="w-64 h-12 bg-gray-700 rounded-lg inline-block animate-pulse"></span>
          )}
        </h1>
        <p className="text-2xl text-gray-400 mt-4">무엇을 도와줄까?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 w-full max-w-4xl">
        {suggestions.map((card, index) => (
          <SuggestionCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            onClick={() => onSuggestionClick(card.title)}
          />
        ))}
      </div>
    </div>
  );
}
