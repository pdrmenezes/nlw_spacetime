import { User } from "lucide-react";
import Link from "next/link";
import nlwLogo from "../assets/nlw-spacetime-logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left column */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* blur bg effect */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-spacetime_purple-700 opacity-50 blur-full" />
        {/* timeline */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        {/* sign in */}
        <Link
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-spacetime_gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-spacetime_gray-400">
            <User className="h-5 w-5 text-spacetime_gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </Link>
        {/* hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="nlw spacetime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-[2.5rem] font-bold leading-tight text-spacetime_gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <Link
            href=""
            className="inline-block rounded-full bg-spacetime_green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-spacetime_green-600"
          >
            Cadastrar Lembrança
          </Link>
        </div>
        {/* footer */}
        <div className="text-sm leading-relaxed text-spacetime_gray-200">
          Feito com 🤍 no NLW da{" "}
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://rocketseat.com.br"
            className="underline hover:text-spacetime_gray-100"
          >
            Rocketseat
          </Link>
        </div>
      </div>

      {/* right column */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="leading-center w-[360px] text-center">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <Link href="" className="underline hover:text-spacetime_gray-50">
              criar agora
            </Link>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
