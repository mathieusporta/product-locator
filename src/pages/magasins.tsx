import React from "react";
import { getDatabase } from "../database";
import { Layout } from "../components/layout";
import { MDBCol, MDBIcon } from "mdbreact";
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
          <form className="form-inline mt-4 mb-4" action="/search">
            <MDBIcon icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
              name="search"
            />
          </form>
        </MDBCol>
        <hr />
        <div className="magasin">
          <div className="topmag">
            <div className="ligneDeCaisse">Caisse</div>
            <div className="entree">Entrée</div>
          </div>
          {shop &&
            shop.map((tata) => {
              return (
                <>
                  <div style={styles.surface}>
                    <div className="rayon" id={tata.slug}>
                      {tata.name}
                      {products &&
                        products.map((toto) => {
                          return toto.slug === tata.slug ? (
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
export async function getServerSideProps(context) {
  const toto = context.query.search;

  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .find({ designation: new RegExp(toto, "i") })
    .limit(10)
    .toArray();
  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
export default Shop;
