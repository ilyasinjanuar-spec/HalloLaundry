import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  status: z.enum(["RECEIVED", "WASHING", "DRYING", "IRONING", "READY", "PICKED_UP"]),
});

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const { status } = schema.parse(await request.json());
    const order = await prisma.order.update({ where: { id }, data: { status } });
    return NextResponse.json({ ok: true, order });
  } catch {
    return NextResponse.json({ ok: false, error: "Tidak dapat memperbarui status pesanan." }, { status: 400 });
  }
}
