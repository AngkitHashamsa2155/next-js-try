import { useRouter } from "next/router";
const productId = () => {
  const router = useRouter();
  console.log(router?.query?.productId, "productId");
  return <div>productId {router?.query?.productId}</div>;
};

export default productId;
