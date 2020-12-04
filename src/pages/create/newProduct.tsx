import React, { useEffect } from "react";
import { Header } from "../../components/header";

import { useSession } from "next-auth/client";
import RayonVisuCreat from "../../components/rayonVisuCreat";

import { getDatabase } from "../../database";
import AddProductForm from "../../components/crudProducts/addProductsForm";


const newProduct = ({ decathlon, shop }) => {

  const [reference, setReference] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [rayon, setRayon] = React.useState("");
  const [hauteurRayon, setHauteurRayon] = React.useState("");
  const [largeurRayon, setLargeurRayon] = React.useState("");


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

  if (loading) {
    return <h1 className="text-center mt-5 text-primary">Loading...</h1>;
  }
  return (
    <>
      <Header />
      <AddProductForm
        reference={reference}
        setReference={setReference}
        designation={designation}
        setDesignation={setDesignation}
        rayon={rayon}
        setRayon={setRayon}
        session={session}
        user={user}
        shop={shop}
        decathlon={decathlon}
        hauteurRayon={hauteurRayon}
        setHauteurRayon={setHauteurRayon}
        largeurRayon={largeurRayon}
        setLargeurRayon={setLargeurRayon}
      />
      <hr />
      <h3 className="text-center mt-4 mb-4 ">Représentation du rayon </h3>
      <RayonVisuCreat />

    </>
  );
};

export default newProduct;

export async function getServerSideProps() {
  const mongodb = await getDatabase();

  const shop = await mongodb.db().collection("shop").find().toArray();
  const decathlon = await mongodb.db().collection("decathlon").find().toArray();

  const products = await mongodb.db().collection("products").find().toArray();


  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      decathlon: JSON.parse(JSON.stringify(decathlon)),

      products: JSON.parse(JSON.stringify(products)),

    },
  };
}
