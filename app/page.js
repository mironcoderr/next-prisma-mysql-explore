import Image from "next/image";
import Link from "next/link";
import { getAllRestaurant } from "@/lib/Restaurant";

export default async function Home() {
    
    const restaurants = await getAllRestaurant()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                restaurants.map((restaurant, index) => {
                    return (
                        <div key={index} className="rounded-xl overflow-hidden bg-white">
                            <Image width={700} height={700} src="/images/restaurants/01.jpg" alt="banner" className="w-full h-40 object-cover" />
                            <div className="px-4 -mt-6 mb-5 isolate">
                                <Image width={100} height={100} src="/images/logo/01.jpg" alt="logo" className="w-12 h-12 rounded-full border-2 border-white" />
                                <h3 className="capitalize text-lg font-semibold whitespace-nowrap text-ellipsis overflow-hidden mt-2 mb-1.5">{restaurant.name}</h3>
                                <p className="text-sm h-10 overflow-hidden text-gray-600">{restaurant.description}</p>
                            </div>
                            <div className="flex items-center gap-1.5 px-4 py-3 border-t border-gray-100 text-gray-600">
                                <i className="mc-line-location text-base leading-none"></i>
                                <span className="text-xs capitalize whitespace-nowrap text-ellipsis overflow-hidden">{restaurant.address}</span>
                            </div>
                            <nav className="flex items-center justify-between border-t border-gray-100">
                                <Link href={`/${restaurant.id}`} className="flex items-center justify-center w-full gap-1.5 py-2.5 border-r last:border-none border-gray-100 hover:bg-gray-50 transition-all duration-300 text-blue-500">
                                    <i className="mc-line-keyboard-open text-sm"></i>
                                    <span className="text-xs capitalize tracking-wide">view</span>
                                </Link>
                                <button className="flex items-center justify-center w-full gap-1.5 py-2.5 border-r last:border-none border-gray-100 hover:bg-gray-50 transition-all duration-300 text-teal-500">
                                    <i className="mc-line-receipt-edit text-sm"></i>
                                    <span className="text-xs capitalize tracking-wide">edit</span>
                                </button>
                                <button className="flex items-center justify-center w-full gap-1.5 py-2.5 border-r last:border-none border-gray-100 hover:bg-gray-50 transition-all duration-300 text-red-500">
                                    <i className="mc-line-trash text-sm"></i>
                                    <span className="text-xs capitalize tracking-wide">trash</span>
                                </button>
                            </nav>
                        </div>
                    )
                })
            }
        </div>
    )
}
