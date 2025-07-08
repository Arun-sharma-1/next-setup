'use client';
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowHeight: 0,
    windowWidth: 0,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    };

    // Check if window exists (for SSR safety)
    if (typeof window !== 'undefined') {
      updateWindowSize();
      window.addEventListener('resize', updateWindowSize);
      return () => window.removeEventListener('resize', updateWindowSize);
    }
  }, []);

  return [windowSize.windowHeight, windowSize.windowWidth];
};

export default useWindowSize;
