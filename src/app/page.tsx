'use client'
import { useDebounce } from '@/hooks/useDebounce'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useEffect, useState } from 'react'
import { updateCount } from '@/redux/slices/counter'
import Link from 'next/link'
import { fetchUser } from '@/redux/slices/user'
import useWindowsize from '@/hooks/useWindowsize'
import { useThrottle } from '@/hooks/useThrottle'
const HomePage = () => {
    const [name, setName] = useLocalStorage('name', "");
    const [height, width] = useWindowsize();
    console.log('height width',height , width)
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
    const fnHandler = () => {
        console.log('button clicked..')
    }
    return (
        <div>
            <input name='name' onChange={handleDebounceChange} placeholder='Enter name' />
            <div>Count value : {counterData?.count}</div>
            <Link href={'/member/12'}>Member dynamic path</Link>
            <button onClick={useThrottle(fnHandler,5000)}>click here</button>
        </div>
    )
}

export default HomePage