import Link from "next/link";

export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="leading-center w-[360px] text-center">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <Link
          href="/memories/new"
          className="underline hover:text-spacetime_gray-50"
        >
          criar agora
        </Link>
        !
      </p>
    </div>
  );
}
