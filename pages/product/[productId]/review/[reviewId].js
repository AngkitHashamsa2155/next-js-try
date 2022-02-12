// import React from 'react'
import { useRouter } from "next/router";
const ReviewId = () => {
  const router = useRouter();
  console.log(router);
  const { productId, reviewId } = router?.query;
  return (
    <div>
      <p> productId {productId}</p>
      <p>reviewId {reviewId}</p>
    </div>
  );
};

export default ReviewId;
