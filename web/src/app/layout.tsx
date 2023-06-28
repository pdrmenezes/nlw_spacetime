import { cookies } from "next/headers";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { SignIn } from "@/components/Signin";
import "./globals.css";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "NLW Spacetime",
  description:
    "Cápsula do tempo construída com Next.js, React, Typescript e TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("token");

  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} bg-spacetime_gray-900 font-sans text-spacetime_gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* left column */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* blur bg effect */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-spacetime_purple-700 opacity-50 blur-full" />
            {/* timeline */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Footer />
          </div>

          {/* right column */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
