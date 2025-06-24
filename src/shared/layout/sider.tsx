'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
const SiderSection = () => {
    const pathname = usePathname()
    const noSiderAllowed = [
        '/blog',
        '/animationd'
    ]
    console.log('pathname', noSiderAllowed.includes(pathname ?? '/'));
    return (
        !noSiderAllowed.includes(pathname ?? '/') ? <div className='flex bg-amber-200 w-48 fixed' style={{ height: "calc(100vh - 56px)" , }}>
            <ul className="flex-auto overflow-auto space-y-2 p-2">
                {Array.from({ length: 20 }).map((_, index) => (
                    <li key={index} className="bg-white p-5 rounded shadow text-center">
                        Item {index + 1}
                    </li>
                ))}
            </ul>
        </div> : null
    )
}

export default SiderSection