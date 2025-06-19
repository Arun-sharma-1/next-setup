'use client'
import { useDebounce } from '@/hooks/useDebounce'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [name, setName] = useLocalStorage('name', "");
    const handleChange = (e: any) => {
        console.log('value changed')
        setName(e.target.value)
    }
    useEffect(() => {
        console.log('name', name)
    }, [name])
    const handleDebounceChange: any = useDebounce(handleChange, 2000)
    return (
        <div>
            <input name='name' onChange={handleDebounceChange} placeholder='Enter name' />
            <div>HomePagee</div>
        </div>
    )
}

export default HomePage