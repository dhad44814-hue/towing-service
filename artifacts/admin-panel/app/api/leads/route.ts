import { NextResponse } from 'next/server';
import { getLeads, saveLeads } from '@/lib/db';

export async function GET() {
  const leads = await getLeads();
  return NextResponse.json({ leads });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, message } = body;

  if (!name || !phone || !message) {
    return NextResponse.json({ message: 'Name, phone, and message are required.' }, { status: 400 });
  }

  const leads = await getLeads();
  const newLead = {
    id: crypto.randomUUID(),
    name,
    phone,
    message,
    date: new Date().toISOString(),
    contacted: false
  };
  leads.unshift(newLead);
  await saveLeads(leads);

  return NextResponse.json({ lead: newLead });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, contacted } = body;

  if (!id) {
    return NextResponse.json({ message: 'Lead id is required.' }, { status: 400 });
  }

  const leads = await getLeads();
  const updated = leads.map((lead) => (lead.id === id ? { ...lead, contacted: Boolean(contacted) } : lead));
  await saveLeads(updated);

  return NextResponse.json({ leads: updated });
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ message: 'Lead id is required.' }, { status: 400 });
  }

  const leads = await getLeads();
  const filtered = leads.filter((lead) => lead.id !== id);
  await saveLeads(filtered);

  return NextResponse.json({ ok: true });
}
