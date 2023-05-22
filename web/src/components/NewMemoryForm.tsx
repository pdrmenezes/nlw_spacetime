"use client";
import { Camera } from "lucide-react";
import { MediaPicker } from "./MediaPicker";
import { FormEvent } from "react";
import { api } from "@/lib/api";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export function NewMemoryForm() {
  const router = useRouter();

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fileToUpload = formData.get("coverUrl");
    let coverUrl = "";
    if (fileToUpload) {
      const uploadFormData = new FormData();
      uploadFormData.set("file", fileToUpload);

      const uploadResponse = await api.post("/upload", uploadFormData);

      coverUrl = uploadResponse.data.fileUrl;
    }

    const token = Cookie.get("token");

    await api.post(
      "/memories",
      {
        coverUrl,
        content: formData.get("content"),
        isPublic: formData.get("isPublic"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    router.push("/");
  }

  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-spacetime_gray-200 hover:text-spacetime_gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar mídia
        </label>
        <MediaPicker />
        <label
          htmlFor="isPublic"
          className="flex items-center gap-1.5 text-sm text-spacetime_gray-200 hover:text-spacetime_gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            className="h-4 w-4 rounded border-spacetime_gray-400 bg-spacetime_gray-700 text-spacetime_purple-500"
          />
          Tornar memória pública
        </label>
      </div>
      <textarea
        name="content"
        spellCheck={false}
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-spacetime_gray-100 placeholder:text-spacetime_gray-400 focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
      />
      <button
        type="submit"
        className="inline-block self-end rounded-full bg-spacetime_green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-spacetime_green-600"
      >
        Salvar
      </button>
    </form>
  );
}