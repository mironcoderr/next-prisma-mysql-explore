'use client'

import React, { useState } from 'react'

export function DeleteActionComponent({ data, onDelete }) {

    const [pending, setPending] = useState(false)

    const handleDelete = async () => {
        setPending(true)

        try { 
            await onDelete(data.id)
        } 
        finally { 
            setPending(false)
        }
    }

    return (
        <button onClick={handleDelete} className="flex items-center justify-center w-full gap-1.5 py-2.5 border-r last:border-none border-gray-100 hover:bg-gray-50 transition-all duration-300 text-red-500">
            { pending ? <i className='mc-line-refresh text-sm animate-spin'></i> : <i className="mc-line-trash text-sm"></i> }
            <span className="text-xs capitalize tracking-wide">trash</span>
        </button>
    )
}