'use client'

import * as Yup from 'yup';
import React, { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const fieldSchema = Yup.object().shape({
    restaurant_name: Yup.string().required(),
    restaurant_address: Yup.string().required(),
    restaurant_description: Yup.string().required(),
})

export function RestaurantFormComponent({ initialValues = {}, onSubmit, isEditMode = false}) {

    const [pending, setPending] = useState(false)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(fieldSchema),
        defaultValues: initialValues,
    })

    useEffect(() => {
        if (initialValues) {
            setValue('restaurant_name', initialValues.name);
            setValue('restaurant_address', initialValues.address);
            setValue('restaurant_description', initialValues.description);
        }
    }, [initialValues, setValue])

    const handleFormSubmit = async (data) => {
        setPending(true)

        try { 
            await onSubmit(data) 
        } 
        finally { 
            setPending(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full grid grid-cols-2 gap-5 p-6">
            <div>
                <label className="block mb-2 capitalize text-xs font-medium text-gray-500">restaurant name: <span className="text-red-500">*</span></label>
                <input {...register('restaurant_name')} type='text' className='w-full h-10 px-3 rounded-lg text-sm bg-gray-100' />
                {errors.restaurant_name?.message && <small className='block mt-1 text-xs font-medium first-letter:capitalize text-red-500'>{errors.restaurant_name?.message}</small>}
            </div>
            <div>
                <label className="block mb-2 capitalize text-xs font-medium text-gray-500">restaurant address: <span className="text-red-500">*</span></label>
                <input {...register('restaurant_address')} type='text' className='w-full h-10 px-3 rounded-lg text-sm bg-gray-100' />
                {errors.restaurant_address?.message && <small className='block mt-1 text-xs font-medium first-letter:capitalize text-red-500'>{errors.restaurant_address?.message}</small>}
            </div>
            <div className="col-span-2">
                <label className="block mb-2 capitalize text-xs font-medium text-gray-500">restaurant description: <span className="text-red-500">*</span></label>
                <textarea {...register('restaurant_description')} className="w-full h-32 px-3 py-2 rounded-lg text-sm resize-none bg-gray-100"></textarea>
                {errors.restaurant_description?.message && <small className='block mt-1 text-xs font-medium first-letter:capitalize text-red-500'>{errors.restaurant_description?.message}</small>}
            </div>
            <button 
                type="submit" 
                disabled={pending} 
                className='col-span-2 flex items-center justify-center gap-2 w-full h-10 leading-10 text-center rounded-lg text-white bg-blue-500'
            >
                { pending && <i className='mc-line-refresh text-lg animate-spin'></i> }
                <span className='text-sm capitalize tracking-wide font-medium'>
                    { pending ? 'Loading...' : isEditMode ? 'Update Restaurant' : 'Create Restaurant' }
                </span>
            </button>
        </form>
    )
}