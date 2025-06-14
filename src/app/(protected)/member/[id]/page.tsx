import React, { use } from 'react'

export const metadata = {
    title: {
        default: "Member info"
    }
}

//async and await are used in server component , to use async operation in client component we have to use use -> use() or useserver
const MemeberDetails = async ({ params }: { params: any }) => {
    const data = await params;
    // const parmas = useParams(); // to use this , we have to make this component as client 
    // console.log('parmas', parmas)
    console.log('id', data)
    return (
        <div>MemeberDetails of</div>
    )
}

export default MemeberDetails