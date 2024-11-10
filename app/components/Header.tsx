import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center #FFC8DD text-white h-24 '>
        <h1 className='font-bold text-3xl pl-24'>NimraKhan</h1>
        <ul className='flex gap-28 mr-40 font-bold '>
            <li><Link href='/'>Portfolio</Link></li>
            <li><Link href='#about'>About</Link></li>
            <li><Link href='#skills'>Skills</Link></li>
            <li><Link href='#contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Header