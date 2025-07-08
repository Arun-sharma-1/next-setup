import { useRef } from "react";

export const useThrottle = (callback: () => void, delay: number) => {
  const timer: null | any = useRef(null);

  return () => {
    if (timer.current == null) {
      callback(); // leading throttling

      timer.current = setTimeout(() => {
        timer.current = null;
      }, delay);
    }
  };
};
