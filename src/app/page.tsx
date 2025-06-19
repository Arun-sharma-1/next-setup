'use client'
import { useDebounce } from '@/hooks/useDebounce'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useEffect, useState } from 'react'
import { updateCount } from '@/redux/slices/counter'
import Link from 'next/link'
import { fetchUser } from '@/redux/slices/user'
const HomePage = () => {
    const [name, setName] = useLocalStorage('name', "");
    const counterData = useAppSelector((state) => state.counter);
    const userData = useAppSelector((state) => state.user);
    console.log('userData', userData)
    const dispatch = useAppDispatch();

    console.log('counterData', counterData)
    const handleChange = (e: any) => {
        console.log('value changed')
        setName(e.target.value)
        dispatch(updateCount(e.target.value))
    }
    useEffect(() => {
        console.log('name', name)
    }, [name])
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    const handleDebounceChange: any = useDebounce(handleChange, 1000)
    return (
        <div>
            <input name='name' onChange={handleDebounceChange} placeholder='Enter name' />
            <div>Count value : {counterData?.count}</div>
            <Link href={'/member/12'}>Member dynamic path</Link>
        </div>
    )
}

export default HomePage