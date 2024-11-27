import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Translator",
  description: "AI Translator Support Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sidebar children={children}></Sidebar>
      </body>
    </html>
  );
}
