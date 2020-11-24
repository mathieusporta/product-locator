import React from "react";
import { getDatabase } from "../src/database";
import { Layout } from "../components/layout";

const Home = ({ products, shop }) => {
  const styles = {
    surface: {
      padding: "20px",
    },
  };
  return (
    <>
      <Layout>
        <div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .find({ slug: "peinture" })
    .limit(1)
    .toArray();
  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Home;
