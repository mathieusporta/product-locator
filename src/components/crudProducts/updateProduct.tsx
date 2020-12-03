import React, { useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/client";

const UpdateProductVisu = ({
  products,
  shop,
  decathlon,
  setHauteurRayon,
  setLargeurRayon,
  largeurRayon,
  hauteurRayon,
}) => {
  const [reference, setReference] = React.useState(products.reference);
  const [designation, setDesignation] = React.useState(products.designation);
  const [rayon, setRayon] = React.useState(products.rayon);

  const [session, loading] = useSession();
  const [user, setUser] = React.useState<{
    admin: boolean;
    enseigne_id: string;
  }>();

  useEffect(() => {
    fetch("/api/user")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        setUser(user);
      });
  }, [session]);
  return (
    <div className="container">
      <h1>Modifier un produit</h1>
      <form
        method="POST"
        action="/api/update/updateProduct"
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
              pattern="[0-9]{8}"
              value={reference}
              title="coucou"
              onChange={(event) => setReference(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Désignation</label>
            <input
              className="form-control"
              id="designation"
              type="text"
              name="designation"
              pattern="[a-zA-Z ]{3,30}"
              value={designation}
              onChange={(event) => setDesignation(event.target.value)}
              required
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
            <input type="hidden" name="id" value={products._id}></input>
          </div>
        </fieldset>

        <div className="row text-center mt-4">
          <div className="col-6">
            <button
              className="btn btn-success text-center w-100"
              id="validateAdd"
              type="submit"
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
      <hr />
    </div>
  );
};
export default UpdateProductVisu;
