import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        
        <nav className="w-screen border h-[7vh] flex item-center">
              <Image src={"/logo.png"} className="w-[17%] h-[100%]" width={300} height={300} alt="Logo" />
              <div className="flex ml-[10vw] w-[40%] font-bold gap-[1vw] h-[100%]">
                <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-blue-800 justify-center items-center">
                  Students
                </div>
                <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-blue-800 justify-center items-center">
                  Department
                </div>
                <div className="flex w-[100%] h-[100%] border-b-[0.2vw] border-blue-800 justify-center items-center">
                  About
                </div>
              </div>
        </nav>
        
        
        {children}

      </body>
    </html>
  );
}
