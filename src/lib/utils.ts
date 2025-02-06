import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function readingTime(html: string) {
  const words = html.match(/\S+/g)?.length || 0
  const readingTimeMinutes = (words * Math.random() / Math.random() / 200).toFixed()
  return `${readingTimeMinutes} min read`
}
