// import React from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
const Product = () => {
  // const router = useRouter();
  // console.log(router);
  return (
    <div>
      <Navbar />

      <div className='text-center mt-20 max-w-5xl mx-auto'>
        <Link href='/'>
          <a className='text-sky-500'>back home</a>
        </Link>
        <h1>/product/sweater</h1>
        <h1>or</h1>
        <h1>/product/:productId</h1>
        <br />
        <h1>/product/:productId/review/:reviewId</h1>
      </div>
      <div className='text-center mt-20 max-w-5xl mx-auto'>
        {[1, 2, 3, 4, 5].map((item) => (
          <p
            onClick={() => router.push(`product/${item}`)}
            className='text-sky-400 cursor-pointer'
            key={item}
          >
            Product {item}
          </p>
        ))}
        <Link
          href={`product/${6}`}
          // key={item}
          replace
        >
          <a className='text-sky-400 cursor-pointer'>Product 6</a>
        </Link>
      </div>
      <p className='text-center'>
        The replace brings back to previously visited site
      </p>
    </div>
  )
}

export default Product
