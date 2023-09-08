/* eslint-disable @next/next/no-css-tags */
import Footer from "./Footer";
import Header from "./Header";
import whatsapp from "@/assets/whatsapp.png";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from 'next/script'

const mont = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Hitch Africa",
  description: "Your Marketplace for Convenience and Comfort!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mont.className}`}>
        <Header />
        {children}
        <Footer />
        <Link
          href="https://api.whatsapp.com/send?phone=23407055554168"
          target="_blank"
        >
          <Image
            src={whatsapp}
            alt=""
            className="fixed bottom-5 md:bottom-20 h-14 w-14 md:h-20 md:w-20 right-5 md:right-20 z-[9999]"
          />
        </Link>
        <Script src="./script.js" />
      </body>
    </html>
  );
}

 {/* <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/ikd3nw1jgn";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ikd3nw1jgn");
            `,
            }}
          />
          <script type="text/javascript"> */}