// components/picture-modal.tsx
"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function PictureModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back(); // Go back to the gallery when modal closes
  };

  return (
    <Dialog open onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
        <DialogTitle className="sr-only">Photo Preview</DialogTitle>
        <DialogDescription className="sr-only">Detailed view of the selected photo</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}