import React from 'react';
import { HeaderComponent } from '@/components/HeaderComponent';
import { RestaurantFormComponent } from '@/components/RestaurantFormComponent';
import { putUpdateRestaurant } from '@/library/Restaurant'
import { getSingleRestaurant } from '@/library/Restaurant'

export default async function UpdateRestaurant({ params }) {

    const restaurant = await getSingleRestaurant(params.restaurantId)
    
    const handleUpdateRestaurant = async (formData) => {
        'use server'
        await putUpdateRestaurant(params.restaurantId, formData)
    }

    return (
        <>
            <HeaderComponent 
                title={`update restaurant (${params.restaurantId})`} 
                label="back to restaurant" 
                path={`/${params.restaurantId}`} 
            />
            <RestaurantFormComponent
                initialValues={restaurant}
                onSubmit={handleUpdateRestaurant}
                isEditMode={true}
            />
        </>
    )
}