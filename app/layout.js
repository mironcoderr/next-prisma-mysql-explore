import { Lora } from "next/font/google";
import "../public/icons/iconly.css";
import "./globals.css";
import Link from 'next/link'

const typography = Lora({ subsets: ["latin"] });

export const metadata = {
    title: "Restaurant CRUD",
    description: "Build with Next + Prisma + Mysql + TailwindCss",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body 
                suppressHydrationWarning={true} 
                className={typography.className}
            >
                <div className="w-full max-w-6xl mx-auto px-3 py-10">
                    <div className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl mb-6 bg-black">
                        <h2 className="text-lg font-medium capitalize text-white">Restaurants</h2>
                        <Link href="/create-restaurant" className="text-sm capitalize rounded-md px-3.5 py-1.5 bg-blue-500 text-white">Create Restaurant</Link>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}
