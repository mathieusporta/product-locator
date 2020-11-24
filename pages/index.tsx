import React from "react";
import { getDatabase } from "../src/database";
import { Layout } from "../components/layout";

const Home = ({ products }) => {
  return ( 
    <Layout>
  <p>{JSON.stringify(products)}</p>
  </Layout>
  )};



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
