import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { getDatabase } from "../src/database";

const Home = ({ products }) => {
  return <p>{JSON.stringify(products)}</p>;
};

export async function getServerSideProps() {
  const mongodb = await getDatabase();

  const products = await mongodb.db().collection("products").find().toArray();
  console.log(products);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
// JSON.parse(JSON.stringify(products)),
export default Home;
