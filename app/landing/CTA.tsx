'use client';
export default function CTA() {
  return (
    <section className="w-full py-20 bg-black px-6 flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        지금, 너의 기가채드를 만나봐라
      </h2>
      <p className="text-gray-300 text-base md:text-lg max-w-xl">
        더 이상 릴스 속 텍스트만 보고 각성하지 마라. 직접 질문하고, 대답을 들어라. 진짜 너만을 위한
        각성은 여기서 시작된다.
      </p>
      <button
        className="mt-8 px-6 py-3 bg-white text-black text-sm md:text-base rounded-xl font-semibold hover:scale-105 transition-all"
        onClick={() => (window.location.href = '/chat')}
      >
        👉 기가채드와 대화 시작하기
      </button>
    </section>
  );
}
