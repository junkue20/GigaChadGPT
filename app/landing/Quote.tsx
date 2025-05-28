'use client';
export default function Quote() {
  return (
    <section className="w-full py-20 bg-gray-50 px-6 flex justify-center items-center">
      <blockquote className="max-w-2xl text-center">
        <p className="text-2xl md:text-3xl font-semibold text-black leading-relaxed">
          “세상은 널 위로하지 않아.
          <br className="hidden md:block" />
          그러니 널 깨우는 건, 너여야 해.”
        </p>
        <footer className="mt-4 text-sm text-gray-500">– GigaChadGPT</footer>
      </blockquote>
    </section>
  );
}
