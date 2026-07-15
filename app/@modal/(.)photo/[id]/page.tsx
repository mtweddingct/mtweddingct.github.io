// app/@modal/(.)photo/[id]/page.tsx
import PictureModal from "@/app/components/pictureModal/page";
import Image from "next/image";
import { use } from "react";

export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function PhotoModalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <PictureModal>
      <div className="relative w-full h-[70vh]">
        <Image
          src={`/images/${id}.jpg`}
          alt={`Photo ${id}`}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          preload
          className="object-contain"
        />
      </div>
    </PictureModal>
  );
}