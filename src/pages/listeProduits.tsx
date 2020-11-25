import React from "react";
import { getDatabase } from "../database";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import Shop from "../components/magasin";

const ListeProduit = ({ products, shop }) => {
  const styles = {
    surface: {
      padding: "20px",
    },
  };
  return (
    <>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Réference</th>
            <th>Désignation</th>
            <th>Rayon</th>
          </tr>
        </MDBTableHead>
        {/* {JSON.stringify(products)} */}

        <MDBTableBody>
          {products &&
            products.map((produit, index) => {
              return (
                <tr> 
                  <td>{index + 1}</td>
                  <td>{produit.reference}</td>
                  <td>{produit.designation}</td>
                  <td>{produit.rayon}</td>
                </tr>
              );
            })}
        </MDBTableBody>
      </MDBTable>
      <div>
        <MDBCol md="6">
          {/* <form
            method="GET"
            className="form-inline mt-4 mb-4"
            action="/listeProduits"
          >
            <MDBIcon icon="search" />
           
          </form> */}
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
  console.log(toto);

  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .find({ designation: new RegExp(toto, "i") })
    // .limit(10)
    .toArray();
  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
export default ListeProduit;
