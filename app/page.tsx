// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import PictureModal from "@/app/components/pictureModal/page";

const PASTEL_RINGS = [
  "ring-pastel-pink",
  "ring-pastel-yellow",
  "ring-pastel-green",
  "ring-pastel-lavender",
  "ring-pastel-orange",
];

export default function GalleryPage() {
  const photos = Array.from({ length: 151 }, (_, i) => i + 1);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">The Wedding of Chris Taylor and Maddie Troyer</h1>
      <p className="text-muted-foreground mb-8">A collection of our favorite moments.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {photos.map((id) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            className="text-left"
          >
            <div
              className={[
                "relative aspect-square overflow-hidden rounded-2xl",
                "ring-4",
                PASTEL_RINGS[(id - 1) % PASTEL_RINGS.length],
                "hover:scale-[1.02] hover:shadow-lg transition-all duration-200",
              ].join(" ")}
            >
              <Image
                src={`/images/_${id}.jpg`}
                alt={`Photo ${id}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={id <= 3}
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>

      {selectedId !== null && (
        <PictureModal onClose={() => setSelectedId(null)}>
          <div className="relative w-full h-[70vh]">
            <Image
              src={`/images/_${selectedId}.jpg`}
              alt={`Photo ${selectedId}`}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
            />
          </div>
        </PictureModal>
      )}
    </main>
  );
}
