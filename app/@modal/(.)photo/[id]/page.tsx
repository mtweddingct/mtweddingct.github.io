// app/@modal/(.)photo/[id]/page.tsx
import PictureModal from "@/app/components/pictureModal/page";
import Image from "next/image";

export default async function PhotoModalPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  
  return (
    <PictureModal>
      <div className="relative aspect-square w-full">
        <Image
          src={`/images/${id}.jpg`} // Replace with your actual data fetching
          alt={`Photo ${id}`}
          fill
          className="object-contain"
        />
      </div>
    </PictureModal>
  );
}