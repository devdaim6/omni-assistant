import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
  const { secretAccess } = params;
  try {
    const secret = await prisma.secrets.findFirst({
      where: { secretAccess },
    });
    return NextResponse.json({
      secret: secret?.apikey,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
