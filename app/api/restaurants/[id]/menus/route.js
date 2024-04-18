import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    const id = parseInt(params.id)

    const showedMenus = await prisma.menu.findMany({
        where: { restaurantId: id }
    });

    return NextResponse.json(showedMenus);
}

export async function POST(request, { params }) {
    const id = parseInt(params.id)
    const data = await request.json()

    const createdMenu = await prisma.menu.create({
        data: { ...data, restaurantId: id }
    })

    return new NextResponse(JSON.stringify(createdMenu), { status: 201 })
}


