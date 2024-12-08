import { NextRequest, NextResponse } from "next/server";
import schema from "./shcema";
import prisma from "@/prisma/client";

//to prevent cashing we have to use request:NextRequest
export async function GET() {

    const users = await prisma.user.findMany();

    return NextResponse.json(users);

}

export async function POST(request: NextRequest) {

    const body = await request.json();

    const valitation = schema.safeParse(body);
    if (!valitation.success) return NextResponse.json(valitation.error.errors, { status: 400 });


    const user = await prisma.user.findUnique({
        where: { email: body.email }
    });

    if (user) return NextResponse.json({ error: 'user already exists' }, { status: 400 });

    const createUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    });

    //Validate data of request ? 
    return NextResponse.json(createUser, { status: 201 });
}