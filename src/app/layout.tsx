import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "../context/LangProvider";
import { ThemeProvider } from "../context/ThemeProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Alberto A. S.",
  description: "This is my portfolio, Where I showcases all my project and works",
  icons: "../../public/logo-transparent.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <LangProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}

