import React from 'react'
import { postRestaurant } from '@/lib/Restaurant';
import { SubmitButton } from '@/components/SubmitButton';

export default function page() {
    return (
        <form action={postRestaurant} className="w-full grid grid-cols-2 gap-y-3 gap-x-4 p-4">
            <div>
                <label className="block mb-1 capitalize text-xs font-medium text-gray-500">restaurant name: <span className="text-red-500">*</span></label>
                <input type='text' name="restaurant_name" className='w-full h-10 px-3 rounded-lg text-sm bg-gray-100' />
            </div>
            <div>
                <label className="block mb-1 capitalize text-xs font-medium text-gray-500">restaurant address: <span className="text-red-500">*</span></label>
                <input type='text' name="restaurant_address" className='w-full h-10 px-3 rounded-lg text-sm bg-gray-100' />
            </div>
            <div className="col-span-2">
                <label className="block mb-1 capitalize text-xs font-medium text-gray-500">restaurant description: <span className="text-red-500">*</span></label>
                <textarea name="restaurant_description" className="w-full h-24 px-3 py-2 rounded-lg text-sm resize-none bg-gray-100"></textarea>
            </div>
            <SubmitButton title="published restaurant" />
        </form>
    )
}