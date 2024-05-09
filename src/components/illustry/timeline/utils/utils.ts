import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function formatDate(date: Date | string) {
    return `${new Date(date).getUTCFullYear()}/${new Date(date).getUTCMonth() + 1}/${new Date(date).getUTCDate()}`;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}