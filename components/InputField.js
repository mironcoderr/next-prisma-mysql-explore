"use client"

import { useState } from "react"

export function InputField({ label, required, type, name }) {

    const [err, setError] = useState(null)

    const handleField = (event) => {
        const inputValue = event.target.value
        
        if(inputValue == null || "") setError('This input field is required!') 
    }

    return (
        <div>
            <label className="block mb-1 capitalize text-xs font-medium text-gray-500">{label}: {required ? <span className="text-red-500">*</span> : ''}</label>
            <input type={type} name={name} onChange={handleField} className='w-full h-10 px-3 rounded-lg text-sm bg-gray-100' />
            {err && <small className="block w-full text-[10px] font-medium mt-1 text-red-500">{err}</small>}
        </div>
    )
}