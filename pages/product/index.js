// import React from 'react'

const Product = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item) => (
        <p key={item}>Product {item}</p>
      ))}
    </div>
  );
};

export default Product;
