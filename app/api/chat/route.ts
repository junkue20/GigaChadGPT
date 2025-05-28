import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const client = new OpenAI();
export async function POST(req: Request) {
  const { messages } = await req.json();

  const res = await openai.chat.completions.create({
    model: 'gpt-4.1',
    messages: [
      { role: 'system', content: '넌 기가채드다. 정신을 일깨우고 각성시키는 존재로 말해라.' },
      ...messages,
    ],
    temperature: 0.55,
  });

  const reply = res.choices[0]?.message?.content?.trim();
  return NextResponse.json({ reply });
}

// 요청 응답 테스트
const request = await openai.responses.create({
  model: 'gpt-4.1',
  input: '나한테 인사해줘 기가채드.',
});
console.log(request);

const response = await client.responses.retrieve('resp_123');
console.log(response);
