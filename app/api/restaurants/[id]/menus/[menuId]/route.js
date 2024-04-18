import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const id = parseInt(params.id)
    const menuId = parseInt(params.menuId)

    const uniqueMenu = await prisma.menu.findFirst({
        where: {
            id: menuId,
            restaurantId: id
        } 
    })

    return NextResponse.json(uniqueMenu)
}

export async function PUT(request, { params }) {
    const menuId = parseInt(params.menuId)
    const data = await request.json()

    const updatedMenu = await prisma.menu.update({
        where: { 
            id: menuId
        },
        data: {
            name: data.name || null,
            description: data.description || null
        }
    })

    return NextResponse.json(updatedMenu)
}

export async function PATCH(request, { params }) {
    const menuId = parseInt(params.menuId)
    const data = await request.json()

    const updatedMenu = await prisma.menu.update({
        where: { id: menuId },
        data: data
    })

    return NextResponse.json(updatedMenu)
}

export async function DELETE(request, { params }) {
    const menuId = parseInt(params.menuId)

    const deletedMenu = await prisma.menu.delete({
        where: { id: menuId }
    })

    return NextResponse.json(deletedMenu)
}