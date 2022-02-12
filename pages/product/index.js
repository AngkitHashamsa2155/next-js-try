// import React from 'react'
import { useRouter } from "next/router";
const Product = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div className="text-center mt-20">
        <h1>/product/sweater</h1>
        <h1>or</h1>
        <h1>/product/:productId</h1>
        <br />
        <h1>/product/:productId/review/:reviewId</h1>
      </div>
      {[1, 2, 3, 4, 5].map((item) => (
        <p key={item}>Product {item}</p>
      ))}
    </div>
  );
};

export default Product;
