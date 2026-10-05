import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-gray-900 px-8 py-3 shadow-sm'>
      <Link to={'/'} className='text-xl font-bold text-white'>Product catalog</Link>
    </header>
  )
}

export default Header