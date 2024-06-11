import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

export async function getAllRestaurant() {
    const result = await fetch('http://localhost:3000/api/restaurants')
    return result.json()
}

export async function getSingleRestaurant(id) {
    const result = await fetch(`http://localhost:3000/api/restaurants/${id}`, {
        method: 'GET',
        cache: 'no-store',
        next: { tags: ["restaurants"] }
    })
    return result.json()
}

export async function postCreateRestaurant(formData) {  
    "use server"

    try {
        const response = await fetch('http://localhost:3000/api/restaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.restaurant_name,
                address: formData.restaurant_address,
                description: formData.restaurant_description,
            })
        })

        if (!response.ok) {
            throw new Error('Failed to create restaurant');
        }
    }
    catch (error) {
        console.error('Failed to create restaurant:', error);
    }

    revalidatePath('/')
    redirect ('/')
}

export async function putUpdateRestaurant(id, formData) {
    'use server'

    try {
        await fetch(`http://localhost:3000/api/restaurants/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.restaurant_name,
                address: formData.restaurant_address,
                description: formData.restaurant_description,
            })
        })
    }
    catch (error) {
        console.error('Failed to create restaurant:', error);
    }

    revalidatePath('/')
    redirect (`/${id}`)
}

export async function deleteRestaurant(id) {
    'use server'

    try {
        await fetch(`http://localhost:3000/api/restaurants/${id}`, {
            method: 'DELETE',
        })
    }
    catch (error) {
        console.error('Failed to delete restaurant:', error);
    }

    revalidatePath('/')
}