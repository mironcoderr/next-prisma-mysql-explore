import { Lora } from "next/font/google";
import "../public/icons/iconly.css";
import "./globals.css";

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
                    {children}
                </div>
            </body>
        </html>
    )
}
