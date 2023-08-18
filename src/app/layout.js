/* eslint-disable @next/next/no-css-tags */
import Footer from "./Footer";
import Header from "./Header";
import bg from "@/assets/hero/hero1.svg";
import "./globals.css";
import { Montserrat } from "next/font/google";
const mont = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Hitch",
  description: "Your Marketplace for Convenience and Comfort!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mont.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
