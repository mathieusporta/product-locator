import React from "react";
import { MDBIcon } from "mdbreact";
import classes from "../../public/styles/magasin.module.css";
import Link from "next/link";

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
                          <Link href="/rayons" as={`/${produit.reference}`} passHref key={produit._id}>
                          <MDBIcon
                            icon="check"
                            
                            className={
                              visible === produit._id ? "bg-success check" : null
                            }
                          />
                          </Link>
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
