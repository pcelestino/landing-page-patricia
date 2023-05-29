import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { ApiFieldError } from "../types";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

type Body = {
  name: string;
  email: string;
  phone: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Body;
  try {
    await prisma.user.create({ data: body });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return NextResponse.json<ApiFieldError<any>>(
          { field: "email", message: "Email já cadastrado" },
          { status: 400 }
        );
      }
    }
  }
  return NextResponse.json(body);
}
