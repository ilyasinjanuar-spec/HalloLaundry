import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  customerName: z.string().min(2),
  phone: z.string().min(8),
  address: z.string().optional(),
  serviceId: z.string().optional(),
  description: z.string().optional(),
  quantity: z.number().positive().optional(),
  weight: z.number().positive().optional(),
  total: z.number().int().nonnegative(),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());
    const customer = await prisma.customer.create({
      data: { name: body.customerName, phone: body.phone, address: body.address },
    });
    const invoiceNo = `HL-${Date.now()}`;
    const order = await prisma.order.create({
      data: {
        invoiceNo, customerId: customer.id, serviceId: body.serviceId || undefined,
        description: body.description, quantity: body.quantity, weight: body.weight,
        total: body.total, notes: body.notes,
      },
    });
    return NextResponse.json({ ok: true, order }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ ok: false, error: error.flatten() }, { status: 400 });
    return NextResponse.json({ ok: false, error: "Gagal menyimpan pesanan. Periksa koneksi database." }, { status: 500 });
  }
}
