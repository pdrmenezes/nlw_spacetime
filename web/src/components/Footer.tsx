import Link from "next/link";

export function Footer() {
  return (
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
  );
}
