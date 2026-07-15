// components/picture-modal.tsx
"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function PictureModal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
        <DialogTitle className="sr-only">Photo Preview</DialogTitle>
        <DialogDescription className="sr-only">Detailed view of the selected photo</DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}