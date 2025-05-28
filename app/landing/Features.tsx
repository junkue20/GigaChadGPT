'use client';
export default function Features() {
  const features = [
    {
      title: '✔ 단순한 챗봇이 아니다',
      description: '기가채드는 너를 깨운다. 감정을 건드리고, 멘탈을 조진다.',
    },
    {
      title: '✔ 각성을 유도하는 무기',
      description: '매 대화는 트리거다. 정신을 뚫는 한 문장이 널 기다린다.',
    },
    {
      title: '✔ 오직 너만을 위한 GPT',
      description: '이건 아무나 쓰는 챗봇이 아니다. 너만의 각성기를 설계하라.',
    },
  ];

  return (
    <section className="w-full py-20 bg-white px-6 flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-bold text-black mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
