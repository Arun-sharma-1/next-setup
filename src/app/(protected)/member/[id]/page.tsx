import React from 'react'

const MemeberDetails = async ({ params }: { params: any }) => {
    const { id: memberId } = await params;
    console.log('id', memberId)
    return (
        <div>MemeberDetails of {memberId}</div>
    )
}

export default MemeberDetails