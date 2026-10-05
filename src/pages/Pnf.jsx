import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-2 bg-gray-200'>
       <h1 className='text-3xl font-bold'>PAGE NOT FOUND</h1>
        <Link to={'/'} className='bg-blue-600 p-2 rounded text-white'>Back to Products</Link>
    </div>
  )
}

export default Pnf