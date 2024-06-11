import Link from 'next/link'

export function HeaderComponent({ title, label, path}) {

    return (
        <div className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl mb-6 bg-black">
            <h2 className="text-lg font-medium capitalize text-white">
                {title || 'title'}
            </h2>
            <Link 
                href={path || '#'} 
                className="text-sm capitalize rounded-md px-3.5 py-1.5 bg-blue-500 text-white">
                {label || 'label'}
            </Link>
        </div>
    )
}