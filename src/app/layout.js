import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Suspense } from "react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "NextJs 14 Homepage",
    template: "%s | NextJs 14",
  },
  description: "Starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container">
          <NavBar />
          <Suspense>
            <div className="inner-container">
              {children}
            </div>
          </Suspense>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
