import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Order from '../../../models/Order';
import { verifyToken } from '../../../lib/auth';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    await connectDB();

    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userData = verifyToken(token);
    if (!userData || !userData.userId) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const body = await req.json();
    const { items, total } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ message: 'No items in order' }, { status: 400 });
    }

    const newOrder = new Order({
      userId: userData.userId,
      items,
      total,
      createdAt: new Date(),
    });

    await newOrder.save();

    return NextResponse.json({ message: 'Order placed successfully' }, { status: 201 });

  } catch (err) {
    console.error('Order API Error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
