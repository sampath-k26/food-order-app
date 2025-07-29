import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Order from '../../../models/Order';
import { verifyToken } from '../../../lib/auth';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    await connectDB();

    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const user = await verifyToken(token);
    if (!user || !user.userId) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const orders = await Order.find({ userId: user.userId }).sort({ createdAt: -1 });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (err) {
    console.error('Error fetching orders:', err);
    return NextResponse.json({ message: 'Failed to fetch orders' }, { status: 500 });
  }
}
