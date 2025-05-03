// Modal.tsx
"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/app/components/ui/dialog";

interface RedeemModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function RedeemModal({ open, onOpenChange, children }: RedeemModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-4xl! max-w-[620px]! pt-3xl p-6">
        {children}
      </DialogContent>
    </Dialog>
  );
}
