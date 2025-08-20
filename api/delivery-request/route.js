import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received delivery request:', body);
    
    
    return NextResponse.json(
      { message: 'Заявка успешно получена' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Ошибка при обработке запроса' },
      { status: 500 }
    );
  }
}