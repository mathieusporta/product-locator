import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { getDatabase } from "../src/database";

const Home = ({ products, shop }) => {
  const styles = {
    surface: {
      padding: "20px",
    },
  };
  return (
    <>
      <div>
        <h1>Shop</h1>
        {/* <p>{JSON.stringify(shop)}</p> */}

        <hr />
        <div className="magasin">
          <div className="ligneDeCaisse">Caisse</div>
          <div className="entree">Entrée</div>

          {shop &&
            shop.map((tata) => {
              return (
                <>
                  <div style={styles.surface}>
                    <div className="rayon" id={tata.slug}>
                      {tata.name}

                      {products &&
                        products.map((toto) => {
                          return toto.slug === "peinture" ? (
                            <p>{toto.designation}</p>
                          ) : null;
                        })}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
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
    .toArray();

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default Home;
