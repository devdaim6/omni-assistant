import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request, { params }: any) {
  const { id } = params;
  try {
    const userConversations = await prisma.conversationToUser
      .findMany({
        where: {
          userId: id,
        },
        select: {
          conversation: {
            include: {
              messages: true,  
            },
          },
        },
      });

    return NextResponse.json({
      message: "Conversations Fetched",
      status: 200,
      userConversations,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while fetching user conversations." },
      { status: 500 }
    );
  }
}
