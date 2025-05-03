import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// lib/utils.ts
export function cn(...inputs: (string | undefined | false | null)[]) {
    return inputs.filter(Boolean).join(" ");
  }
