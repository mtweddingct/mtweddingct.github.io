// app/@modal/(.)photo/[id]/page.tsx
import PictureModal from "@/app/components/pictureModal/page";
import Image from "next/image";
import { use } from "react";

export function generateStaticParams() {
  return Array.from({ length: 151 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function PhotoModalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return (
    <PictureModal onClose={() => {}}>
      <div className="relative w-full">
        <Image
          src={`/images/_${id}.jpg`}
          alt={`Photo ${id}`}
          fill
          preload
          className="object-contain"
        />
      </div>
    </PictureModal>
  );
}