import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { username, email, password, name, image } = await req.json();

  const users = await prisma.user.findMany({
    where: { OR: [{ email, provider: "credentials" }, { username }] },
  });
  const emailAlreadyExists = users.filter(
    (user) => user?.email === email && user.provider === "credentials"
  );

  if (emailAlreadyExists.length > 0) {
    return NextResponse.json({
      message: "Email associated with a different account",
      description: "Please try a different one",
      status: 403,
    });
  }

  const usernameAlreadyExists = users.filter(
    (user) => user?.username === username
  );

  if (usernameAlreadyExists.length > 0) {
    return NextResponse.json({
      message: "Username already exists",
      description: "Please try a different one",
      status: 403,
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        image,
      },
    });
  }
  try {
    return NextResponse.json({
      message: "Account created",
      description: "You can Login now",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
