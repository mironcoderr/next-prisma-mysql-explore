const { PrismaClient } = require('@prisma/client')

const restaurants = require('./data/restaurants.json')
const menus = require('./data/menus.json')

const prisma = new PrismaClient()

async function main() {
    const restaurant = await prisma.restaurant.createMany({ data: restaurants })
    console.log('Created Restaurants:', restaurant.count)

    const menu = await prisma.menu.createMany({ data: menus })
    console.log('Created Menus:', menu.count)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    })