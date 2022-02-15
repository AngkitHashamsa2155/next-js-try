// import React from 'react'
// import  {Link} from 'next/link'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div className='w-full bg-teal-500 text-white'>
      <nav className='max-w-5xl mx-auto flex justify-between items-center py-4 '>
        <div className='cursor-pointer'>
          <h4>
            <Link href='/'>
              <a> Logo</a>
            </Link>
          </h4>
        </div>
        <ul className='flex items-center cursor-pointer '>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li className='mx-4'>
            <Link href='/blog'>
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>contact</a>
            </Link>
            {/* contact */}
          </li>
          <li className='mx-4'>
            <Link href='/docs'>
              <a>docs</a>
            </Link>
            {/* docs */}
          </li>
          <li>
            <Link href='/product'>
              <a>product</a>
            </Link>
            {/* product */}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
