import Link from "next/link";
import React from "react";
import { getDatabase } from "../../database";

const ChooseShop = ({ enseigne }) => {
  return (
    <>
      <h1>salut</h1>
      <ul>
        {enseigne.map((magasin) => {
          return (
            <Link
              href="/enseignes/[liste-produit-par-enseigne]"
              as={`/enseignes/${magasin._id}`}
              passHref
              key={magasin._id}
            >
              <li>{magasin.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default ChooseShop;

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();

  const shop = await mongodb.db().collection("shop").find().toArray();
  const enseigne = await mongodb.db().collection("enseigne").find().toArray();
  const users = await mongodb.db().collection("users").find().toArray();
  const decathlon = await mongodb.db().collection("decathlon").find().toArray();
  const products = await mongodb.db().collection("products").find().toArray();

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
      enseigne: JSON.parse(JSON.stringify(enseigne)),
      users: JSON.parse(JSON.stringify(users)),
      decathlon: JSON.parse(JSON.stringify(decathlon)),
    },
  };
}
