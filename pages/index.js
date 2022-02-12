import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const gotoProduct = () => {
    router.replace("/product");
  };

  // We can use router push or replace the replace behvae as same as like Link example
  return (
    <div>
      <Navbar />
      <div>I am Home</div>
      <h2>Buy products</h2>
      <button onClick={gotoProduct}>Go to product</button>
    </div>
  );
};

export default index;
