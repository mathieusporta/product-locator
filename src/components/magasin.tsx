import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import classes from "../../public/styles/magasin.module.css";

const MagasinVisu = ({ products, shop, visible }) => {
  return (
    <div className="container">
      <hr />
      <div className={classes.magasin} id="planmag">
        <div className={classes.topmag}>
          <div className={classes.reprise}>reprise marchandise</div>
          <div className={classes.ligneDeCaisse}>Caisse</div>
          <div className={classes.accueil}>accueil</div>
          <div className={classes.entree}>Entrée</div>
        </div>
        <div className="row">
          {shop &&
            shop.map((magasin) => {
              return (
                <div key={magasin._id} className="col-3">
                  <div className={classes.rayon} id={magasin.slug}>
                    {magasin.name}
                    <br />
                    {products &&
                      products.map((produit) => {
                        return produit.slug === magasin.slug ? (
                          <MDBIcon
                            icon="check"
                            key={produit._id}
                            className={
                              visible === produit._id ? "bg-success" : null
                            }
                          />
                        ) : null;
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MagasinVisu;
