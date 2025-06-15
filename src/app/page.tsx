'use client'
import { someRegularFunction } from '@/constants'
import { useDebounce } from '@/hooks/useDebounce';
import React, { useState } from 'react'

const HomePage = () => {
    const handleChange = (e: any) => {
        console.log('value changed')
    }
    const handleDebounceChange: any = useDebounce(handleChange, 300)
    return (
        <div>
            <input name='name' onChange={handleDebounceChange} placeholder='Enter name' />
            <div>HomePagee</div>
        </div>
    )
}

export default HomePage