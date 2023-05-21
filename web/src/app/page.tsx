import { cookies } from "next/headers";

import { SignIn } from "@/components/Signin";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Profile } from "@/components/Profile";

export default function Home() {
  const isAuthenticated = cookies().has("token");

  return (
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
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  );
}
