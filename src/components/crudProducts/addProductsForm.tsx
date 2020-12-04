import React from "react";
import Link from "next/link";

const AddProductForm = ({
  reference,
  setReference,
  designation,
  setDesignation,
  rayon,
  setRayon,
  session,
  user,
  shop,
  decathlon,
  hauteurRayon,
  setHauteurRayon, 
  largeurRayon, 
  setLargeurRayon
}) => {
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
              {session && user?.enseigne_id === "5fc50531f3c2b1662658430d"
                ? shop.map((lm) => {
                    return <option key={lm._id}>{lm.name}</option>;
                  })
                : decathlon.map((dt) => {
                    return <option key={dt._id}>{dt.name}</option>;
                  })}
            </select>
          </div>
          <label htmlFor="localisation-rayon">Localisation Rayon</label>
          <div className="row">
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
              </select>
            </div>

            <div className="form-group col-6">
              <label htmlFor="localisation-rayon">Hauteur Y</label>
              <select
                className="form-control"
                id="localisation-rayon"
                name="largeurY"
                value={hauteurRayon}
                onChange={(event) => setHauteurRayon(event.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <input type="hidden" name="id" value={user?.enseigne_id}></input>
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
            <Link href="/">
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
export default AddProductForm;
