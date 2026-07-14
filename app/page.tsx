// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">My Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((id) => (
          <Link key={id} href={`/photo/${id}`} scroll={false}>
            <div className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition">
              <Image
                src={`/images/${id}.jpg`}
                alt="Gallery item"
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}