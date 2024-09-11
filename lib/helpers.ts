import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeEachWord(input: string, separator: string = ' '): string {
  if (!input.trim())
    return ''

  return input.split(separator)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(separator)
}
