'use client';

import { SuggestionCardProps } from '../types';

export default function SuggestionCard({ title, subtitle, onClick }: SuggestionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 p-4 rounded-lg text-left w-full h-full hover:bg-gray-700 transition flex flex-col justify-between"
    >
      <div>
        <p className="text-gray-200 font-semibold">{title}</p>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>
    </button>
  );
}
