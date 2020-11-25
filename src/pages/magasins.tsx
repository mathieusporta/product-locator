import React from "react";
import { getDatabase } from "../database";
import { Layout } from "../components/layout";
import { MDBCol, MDBIcon } from "mdbreact";
import Link from "next/link";
import { Header } from "../components/header";
import SearchBarSection from "../components/SearchBarSection";

const Shopiii = ({ products, shop }) => {
  const styles = {
    surface: {
      padding: "20px",
    },
  };
  return (
    <>
      <Header />
      <SearchBarSection />
      <div>
        <div></div>
        <hr />
        <div className="magasin">
          <div className="topmag">
            <div className="ligneDeCaisse">Caisse</div>
            <div className="entree">Entrée</div>
          </div>
          {shop &&
            shop.map((magasin) => {
              return (
                <>
                  <div style={styles.surface} key={magasin._id}>
                    <div className="rayon" id={magasin.slug}>
                      {magasin.name}
                      <br />
                      {products &&
                        products.map((produit) => {
                          return produit.slug === magasin.slug ? (
                            <MDBIcon icon="check" key={produit._id} />
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
export async function getServerSideProps(context) {
  const produit = context.query.search;

  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .find({ designation: new RegExp(produit, "i") })
    // .limit(10)
    .toArray();
  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
export default Shopiii;
