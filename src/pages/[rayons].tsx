import React from "react";
import { getDatabase } from "../database";

import RayonVisuClient from "../components/rayonVisuelClient";
import { Header } from "../components/header";


import RayonVisuClient from "../components/rayonVisuelClient";
import { Header } from "../components/header";


const Rayon = ({product}) => {
  return (
    <>

      <Header />
      <RayonVisuClient product={product} />

    </>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const refProduct = context.params.rayons;

  const product = await mongodb
    .db()
    .collection("products")
    .findOne({ reference: refProduct });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default Rayon;
