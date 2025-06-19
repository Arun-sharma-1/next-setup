import { useEffect, useState } from "react";

const getSavedValue = (key: string, value: string) => {
    if (typeof window === "undefined") return value;

    try {
        const raw = localStorage.getItem(key);
        const savedValue = raw ? JSON.parse(raw) : null;
        if (savedValue) return savedValue;
        return value;
    } catch (error) {
        console.warn(`Error reading key "${key}" from localStorage`, error);
        return value;
    }
}
export function useLocalStorage(key: string, value: string) {
    const [updatedValue, setUpdatedValue] = useState(() => getSavedValue(key, value));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(updatedValue));
    }, [updatedValue])

    return [updatedValue, setUpdatedValue]
}