import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import FloatingBubbles from "@/components/FloatingBubbles";
import MouseGlow from "@/components/MouseGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday, Nila!",
  description: "A digital relationship vault",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gradient-vibrant text-indigo-950 relative selection:bg-pink-300 selection:text-pink-900 cursor-default">
        
        <MouseGlow />
        
        {/* Background Blobs for 3D depth */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" style={{ animationDelay: "2s" }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" style={{ animationDelay: "4s" }}></div>
        </div>

        <FloatingBubbles />

        {/* This wrapper ensures children stack over bubbles where needed */}
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
