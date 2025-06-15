import React from 'react'

const OperationHomePage = async () => {
    await new Promise((resolve, rejects) => { setTimeout(() => { resolve('success') }, 2000) })
    return (
        <div>OperationHomePage</div>
    )
}

export default OperationHomePage