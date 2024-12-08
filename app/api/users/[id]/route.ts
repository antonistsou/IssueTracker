import { NextRequest, NextResponse } from "next/server";
import schema from "../shcema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    //Fetch from DB 
    const p = await params;
    const id = p.id;

    const user = await prisma.user.findUnique({
        where: { id: id }
    })

    //if no data found, return 404
    if (!user) return NextResponse.json({ error: 'User does not exist' }, { status: 404 });

    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const p = await params;
    const id = p.id;
    const body = await request.json();
    const valitation = schema.safeParse(body);
    if (!valitation.success) return NextResponse.json(valitation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    });


    if (!user) return NextResponse.json({ error: "User Not Found!" }, { status: 404 });

    const newuser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    });

    return NextResponse.json(newuser);
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const p = await params;
    const id = p.id;

    const user = await prisma.user.findUnique({
        where: { id: id }
    })

    if (!user) return NextResponse.json({ error: "User Not Found!" }, { status: 404 });

    await prisma.user.delete({
        where: {
            id: user.id
        }
    });

    return NextResponse.json({});
}