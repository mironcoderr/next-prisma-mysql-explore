import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
    const data = await request.json()
    const createdRestaurant = await prisma.restaurant.create({ data: data })
    return new NextResponse(JSON.stringify(createdRestaurant), { status: 201 })
}

export async function GET() {
    const showedRestaurants = await prisma.restaurant.findMany();
    return NextResponse.json(showedRestaurants);
}

