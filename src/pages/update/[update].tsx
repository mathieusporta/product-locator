import React from "react";
import { getDatabase } from "../../database";
import RayonVisue from "../../components/rayonVisu";
import { Header } from "../../components/header";
import UpdateProductVisu from "../../components/crudProducts/updateProduct";

const UpdateProduct = ({ products }) => {
  return (
    <>
      <Header />
      <UpdateProductVisu products={products} />
      <RayonVisue product={products} />
    </>
  );
};

export default UpdateProduct;

export async function getServerSideProps(context) {
  const toto = context.params.update;
  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .findOne({ reference: toto });

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
