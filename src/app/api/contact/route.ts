// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Message from '@/models/Message';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create new message
    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { success: true, message: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}