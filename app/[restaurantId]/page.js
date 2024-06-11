import React from 'react'
import { getSingleRestaurant } from '@/library/Restaurant'
import { HeaderComponent } from '@/components/HeaderComponent'

export default async function SingleRestaurant({ params }) {

    const restaurant = await getSingleRestaurant(params.restaurantId)

    return (
        <>
            <HeaderComponent title="single restaurant" label="all restaurant" path="/" />
            <ul>
                <li>{restaurant.id}</li>
                <li>{restaurant.name}</li>
                <li>{restaurant.address}</li>
                <li>{restaurant.description}</li>
            </ul>
        </>
    )
}
