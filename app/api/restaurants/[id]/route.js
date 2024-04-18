import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const id = parseInt(params.id)
    const uniqueRestaurant = await prisma.restaurant.findUnique({ where: { id } })
    return NextResponse.json(uniqueRestaurant)
}

export async function PUT(request, { params }) {
    const id = parseInt(params.id)
    const data = await request.json()
    const updatedRestaurant = await prisma.restaurant.update({
        where: { id },
        data: {
            name: data.name || null,
            address: data.address || null,
            description: data.description || null
        }
    })
    return NextResponse.json(updatedRestaurant)
}

export async function PATCH(request, { params }) {
    const id = parseInt(params.id)
    const data = await request.json()
    const updatedRestaurant = await prisma.restaurant.update({
        where: { id },
        data: data
    })
    return NextResponse.json(updatedRestaurant)
}

export async function DELETE(request, { params }) {
    const id = parseInt(params.id)
    const deletedRestaurant = await prisma.restaurant.delete({
        where: { id }
    })
    return NextResponse.json(deletedRestaurant)
}