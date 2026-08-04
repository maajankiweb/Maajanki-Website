export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const apiKey = process.env.NVIDIA_API_KEY;
    const defaultModel = process.env.NEXT_PUBLIC_NVIDIA_MODEL || 'openai/gpt-oss-120b';

    if (!apiKey) {
      return NextResponse.json(
        { error: { message: 'NVIDIA_API_KEY is not configured in environment variables.' } },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { messages, model, temperature, top_p, max_tokens } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: { message: 'Invalid payload: "messages" array is required.' } },
        { status: 400 }
      );
    }

    const nvidiaUrl = 'https://integrate.api.nvidia.com/v1/chat/completions';

    const payload = {
      model: model || defaultModel,
      messages: messages,
      temperature: typeof temperature === 'number' ? temperature : 1.0,
      top_p: typeof top_p === 'number' ? top_p : 1.0,
      max_tokens: typeof max_tokens === 'number' ? max_tokens : 1024,
      stream: false,
    };

    const response = await fetch(nvidiaUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Chat API Proxy Error:', error);
    return NextResponse.json(
      { error: { message: error.message || 'Internal Server Error' } },
      { status: 500 }
    );
  }
}
