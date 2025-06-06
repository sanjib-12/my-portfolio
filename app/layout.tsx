
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Sanjib Barakoti",
   description:
      "Sanjib is a full-stack developer with over a year of experience",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className="!scroll-smooth">
         <body
            className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
         >
            <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
            <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#676394]"></div>

            <ThemeContextProvider>
               <ActiveSectionContextProvider>
                  <Header />
                  {children}
                  <Footer />
                  <Toaster position="top-right" />
               </ActiveSectionContextProvider>
               <ThemeSwitch />
            </ThemeContextProvider>
         </body>
      </html>
   );
}
