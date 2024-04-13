import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function clamp(val: number, min: number, max: number) {
  return (val <= min) 
    ? min : 
  (val >= max) 
    ? max : 
  val;
}
