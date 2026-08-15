import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Portfolio from '@/lib/models/Portfolio';

export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    const updatedProject = await Portfolio.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updatedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, project: updatedProject });
  } catch (error) {
    console.error('API /api/admin/portfolio/[id] PATCH Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const deletedProject = await Portfolio.findByIdAndDelete(id);
    if (!deletedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('API /api/admin/portfolio/[id] DELETE Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
