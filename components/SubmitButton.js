'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({ title, onClick }) {
    const { pending } = useFormStatus()

    return (
        <button type="submit" disabled={pending} onClick={onClick} className='col-span-2 text-sm capitalize w-full h-10 leading-10 tracking-wide font-medium text-center rounded-lg text-white bg-blue-500'>
            { title || 'submit' }
        </button>
    )
}