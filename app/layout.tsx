import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import TransitionWrapper from "./components/TransitionWrapper";

export const metadata: Metadata = {
  title: "Aniedoabasi",
  description: "Award winning sound design, music, and mix for brands and directors across the globe.",
  openGraph: {
    title: "Aniedoabasi",
    description: "Welcome to Aniedoabasi. We are an award winning creative sound and music company.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased select-none" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#edece8] text-[#131313] font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <Preloader />
        <Navigation />
        <Cursor />
        <TransitionWrapper>
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </TransitionWrapper>
      </body>
    </html>
  );
}
