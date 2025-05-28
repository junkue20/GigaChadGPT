'use client';
export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight tracking-tight">
        기가채드는 질문에 답하지 않는다.
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700">너의 정신을 바꾼다.</p>
      <p className="mt-2 text-sm md:text-base text-gray-500 italic">
        This is not just another chatbot. This is YOUR WAKE-UP CALL.
      </p>

      <button
        className="mt-8 px-6 py-3 bg-black text-white rounded-xl text-sm md:text-base font-semibold hover:scale-105 transition-all"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        👉 기가채드 체험하기
      </button>
    </section>
  );
}
