import { useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    //why ref ?? -> hooks enter in react lifecycle -> closure or state refresh
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    return (...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => { func(...args) }, delay)
    }
}
