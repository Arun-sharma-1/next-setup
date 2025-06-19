export function debounceFunction<T extends (...args: any[]) => void>(Fn: T, delay: number) {
    let timer: undefined | ReturnType<typeof setTimeout> = undefined;

    //return the closure so it remember the timer in next call -> closure->remember lexical envirnment.
    return (...args: Parameters<T>) => {
        //prev time
        if (timer) {
            clearTimeout(timer);
        }
        //new call  -> no timer
        timer = setTimeout(() => Fn(...args), delay);

    }
}