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
      <Layout>
        <div>
          <MDBCol md="6">
            <form className="form-inline mt-4 mb-4">
              <MDBIcon icon="search" />
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
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
export default Shop;
