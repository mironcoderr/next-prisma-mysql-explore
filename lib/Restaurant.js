import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

export async function getAllRestaurant() {
    const result = await fetch('http://localhost:3000/api/restaurants')
    return result.json()
}

export async function getSingleRestaurant(id) {
    const result = await fetch(`http://localhost:3000/api/restaurants/${id}`, {
        cache: 'no-store',
        next: { tags: ["restaurants"] }
    })
    return result.json()
}

const fieldSchema = z.object({
    restaurant_name: z.string(),
    restaurant_address: z.string(),
    restaurant_description: z.string(),
})

export async function postRestaurant(formData) {  
    "use server"

    const validatedFields = fieldSchema.safeParse({
        name: formData.get('restaurant_name'),
        address: formData.get('restaurant_address'),
        description: formData.get('restaurant_description'),
    })

    console.log(validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    else {
        try {
            await fetch('http://localhost:3000/api/restaurants', {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.get('restaurant_name'),
                    address: formData.get('restaurant_address'),
                    description: formData.get('restaurant_description'),
                })
            })
        }
        catch (error) {
            console.error('Failed to create restaurant:', error);
        }
        revalidatePath('/')
        redirect ('/')
    }
}