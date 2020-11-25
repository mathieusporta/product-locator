import React from "react";
import { getDatabase } from "../database";
import { Layout } from "../components/layout";
import { MDBCol, MDBIcon } from "mdbreact";
import Link from "next/link";

const Shop = ({ products, shop }) => {
  const styles = {
    surface: {
      padding: "20px",
    },
  };
  return (
    <>
      <div>
        <MDBCol md="6">
          <form method="GET" className="form-inline mt-4 mb-4" action="/listeProduits">
            <MDBIcon icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
              name="search"
            />
            {/* <input type="hidden" value={products} name="designation" /> */}
          </form>
        </MDBCol>
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
                          ) : // <p>{produit.designation}</p>
                          null;
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
export default Shop;
