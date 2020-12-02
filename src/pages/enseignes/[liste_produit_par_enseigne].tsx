import React from "react";
import TableauProduitVisu from "../../components/tableauProduits";
import { getDatabase } from "../../database";
import user from "../api/user";

const Test = ({ shop, products, enseigne, users, decathlon, magId }) => {
  const [Visible, setVisible] = React.useState("");
  return (
    <>
      <h1>coucou</h1>
      <TableauProduitVisu
        products={magId}
        visible={Visible}
        setVisible={setVisible}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const mag = context.params.liste_produit_par_enseigne;

  const magId = await mongodb
    .db()
    .collection("products")
    .find({ enseigne_id: mag })
    .toArray();
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
      magId: JSON.parse(JSON.stringify(magId)),
    },
  };
}

export default Test;
