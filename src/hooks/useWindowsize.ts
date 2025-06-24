'use client'
import React, { useEffect, useState } from 'react'

const useWindowsize = () => {
    const [windowSize, setwindowSize] = useState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    })
    const updateWindowSize = () => {
        setwindowSize({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        })
    }
    useEffect(() => {
        document.addEventListener('resize', updateWindowSize);

        return () => { document.removeEventListener('resize', updateWindowSize) }
    }, [windowSize.windowHeight ,windowSize.windowWidth])

    return [windowSize.windowHeight, windowSize.windowWidth];
}

export default useWindowsize