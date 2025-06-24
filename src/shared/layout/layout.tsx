import React from 'react'
import SiderSection from './sider'

const TopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-screen relative overflow-hidden'>
            <div className='bg-red-500 w-full p-4 z-50 fixed' >Header</div>

            {/* sider section  */}
            <div className='flex h-full w-full 'style={{marginTop:'50px'}}>
                <SiderSection />

                {/* body section  */}
                <div className='flex w-full relative'>
                    <div className='flex-auto overflow-auto p-2.5 relative'>{children}</div>
                </div>
            </div>
        </div>

    )
}

export default TopLayout