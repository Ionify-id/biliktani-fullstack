import { Inter } from "next/font/google";
import "@/app/globals.css";
import LeftSidebar from "@/components/sidebar/left-sidebar";
import RightSidebar from "@/components/sidebar/right-sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bilik tani",
  description:
    "Aplikasi perhitungan, informasi dan pencatatan untuk membantu petani.",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-row items-start justify-between`}
      >
        <>
          <LeftSidebar />
          <main className="w-full h-screen overflow-y-auto">{children}</main>
          <RightSidebar />
        </>
        {modal}
        <Toaster />
      </body>
    </html>
  );
}
