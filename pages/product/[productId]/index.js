import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
const productId = () => {
  const router = useRouter();
  console.log(router?.query?.productId, "productId");
  return (
    <div>
      <Navbar />
      productId {router?.query?.productId}
    </div>
  );
};

export default productId;
