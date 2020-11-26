import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";


const MagasinVisu = ({ products, shop, visible }) => {

  const styles = {
    surface: {
      padding: "20px",
    },
  };
  return (
    <div>
      <MDBCol md="6"></MDBCol>
      <hr />
      <div className="magasin">
        <div className="topmag">
          <div className="ligneDeCaisse">Caisse</div>
          <div className="entree">Entrée</div>
        </div>
        {shop &&
          shop.map((magasin) => {
            return (
              <div style={styles.surface} key={magasin._id}>
                <div className="rayon" id={magasin.slug}>
                  {magasin.name}
                  <br />
                  {products &&
                    products.map((produit) => {
                      return produit.slug === magasin.slug ? (

                        <MDBIcon icon="check" key={produit._id}  className={visible === produit._id ? "bg-success" : null}
                        />

                      ) : null;
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MagasinVisu;
