import React from "react";
import { getDatabase } from "../database";
import RayonVisue from "../components/rayonVisuUpdate";


const Rayon = ({ product }) => {
  return (
    <>
      
      <RayonVisue product={product} />
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
