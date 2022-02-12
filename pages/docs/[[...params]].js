// import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  // console.log(router);
  console.log(params);

  if (params.length === 2) {
    return (
      <div>
        <Navbar />
        <h2>
          Viewing docs for feature {params[0]} and concept of {params[1]}
        </h2>
      </div>
    );
  } else if (params.length === 1) {
    return (
      <div>
        <Navbar />
        <h1> feature {params[0]}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-lg text-sky-500">Doc home</h1>
        <h1> /docs/feature1/concept1</h1>
        <br />
        <h1>1[featureId] x 1[conceptId]</h1>
        <h1>Catch all routes with params</h1>
        <h1>[...prams].js</h1>
        <br />
        <h1>To show docs without Error use [[...prams]].js</h1>
      </div>
    </div>
  );
};

export default Docs;
