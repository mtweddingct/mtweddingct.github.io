// app/@modal/(.)photo/[id]/page.tsx
import PictureModal from "@/app/components/pictureModal/page";
import Image from "next/image";

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default async function PhotoModalPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  
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