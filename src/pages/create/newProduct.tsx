import React from "react";
import { Header } from "../../components/header";
import Link from "next/link";
import { getDatabase } from "../../database";
import MagasinVisu from "../../components/magasin";

const newProduct = () => {
  const [reference, setReference] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [rayon, setRayon] = React.useState("");
  const [localisationRayon, setLocalisationRayon] = React.useState("");
  const [largeurRayon, setLargeurRayon] = React.useState("");
  return (
    <div className="container">
      <h1>Add Product</h1>
      <form
        method="POST"
        action="/api/create/newProduct"
        className="bg-light p-4 border border-dark rounded mt-5"
      >
        <fieldset>
          <div className="form-group">
            <label htmlFor="reference">Référence</label>
            <input
              className="form-control"
              id="reference"
              type="text"
              name="reference"
              value={reference}
              onChange={(event) => setReference(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Désignation</label>
            <input
              className="form-control"
              id="designation"
              type="text"
              name="designation"
              value={designation}
              onChange={(event) => setDesignation(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rayon">Rayon</label>
            <select
              className="form-control"
              id="rayon"
              name="rayon"
              value={rayon}
              onChange={(event) => setRayon(event.target.value)}
            >
              <option>Matériaux</option>
              <option>Menuiserie</option>
              <option>Électricité/Plomberie</option>
              <option>Outillage</option>
              <option>Rangement/Cuisine</option>
              <option>Monde Sol</option>
              <option>Sanitaire</option>
              <option>Confort/Chauffage</option>
              <option>Jardin</option>
              <option>Quincaillerie</option>
              <option>Peinture</option>
              <option>Décoration</option>
              <option>Luminaire</option>
            </select>
          </div>
          <label htmlFor="localisation-rayon">Localisation Rayon</label>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="localisation-rayon">Hauteur Y</label>
              <select
                className="form-control"
                id="localisation-rayon"
                name="largeurY"
                value={localisationRayon}
                onChange={(event) => setLocalisationRayon(event.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="form-group col-6">
              <label htmlFor="largeurX">Largeur X</label>
              <select
                className="form-control"
                id="largeurX"
                name="largeurX"
                value={largeurRayon}
                onChange={(event) => setLargeurRayon(event.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
        </fieldset>

        <div className="row text-center mt-4">
          <div className="col-6">
            <button
              className="btn btn-success text-center w-100"
              id="validateAdd"
            >
              Validate
            </button>
          </div>
          <div className="col-6">
            <Link href="/admin/admin">
              <button
                type="submit"
                className="btn btn-danger text-center w-100"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default newProduct;

export async function getServerSideProps() {
  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb.db().collection("products").find().toArray();

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
