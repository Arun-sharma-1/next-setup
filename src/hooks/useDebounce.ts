// utils/debounce.ts
export function useDebounce(func: any, delay: number) {
    let timer: number | null = null;

    return (...args: any) => {
        console.log('args ', args)
        if (timer) clearTimeout(timer);
        timer = window.setTimeout(() => {
            func(...args);
        }, delay);
    };
}
