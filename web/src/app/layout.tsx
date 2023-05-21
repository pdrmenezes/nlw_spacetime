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
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} bg-spacetime_gray-900 font-sans text-spacetime_gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
