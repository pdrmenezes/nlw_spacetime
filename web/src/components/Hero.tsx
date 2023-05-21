import Image from "next/image";
import Link from "next/link";
import nlwLogo from "../assets/nlw-spacetime-logo.svg";

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="nlw spacetime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-[2.5rem] font-bold leading-tight text-spacetime_gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-spacetime_green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-spacetime_green-600"
      >
        Cadastrar Lembrança
      </Link>
    </div>
  );
}
