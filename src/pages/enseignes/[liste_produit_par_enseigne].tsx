import React from "react";
import TableauProduitVisu from "../../components/tableauProduits";
import { getDatabase } from "../../database";
import user from "../api/user";
import Link from "next/link";
import { maxHeaderSize } from "http";
import { Header } from "../../components/header";
import SearchBarAdmin from "../../components/SearchBarAdmin";
import Pagination from "../../components/pagination";

const Test = ({ shop, products,  currentPage, pageCount, users, decathlon, magId}) => {
  const [Visible, setVisible] = React.useState("");
  return (
    <>
      <Header/>
      <SearchBarAdmin/>
      <TableauProduitVisu
        products={magId}
        visible={Visible}
        setVisible={setVisible}
        
      />
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const mag = context.params.liste_produit_par_enseigne;
  const searchwithRegex = context.query.search;
  const page = context.query.page || 1;
  const nPerPage = 5;


  const magId = await mongodb
    .db()
    .collection("products")
    .find({ enseigne_id: mag })
    // .find({ enseigne_id: mag })
    .skip(page > 0 ? (page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const enseigne = await mongodb.db().collection("enseigne").find().toArray();
  const users = await mongodb.db().collection("users").find().toArray();
  const decathlon = await mongodb.db().collection("decathlon").find().toArray();
  const products = await mongodb.db().collection("products").find().toArray();
  const productsTotal = await mongodb
  .db()
  .collection("products")
  .find({ enseigne_id : new RegExp(searchwithRegex, "i") })
  .count();

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
      enseigne: JSON.parse(JSON.stringify(enseigne)),
      users: JSON.parse(JSON.stringify(users)),
      decathlon: JSON.parse(JSON.stringify(decathlon)),
      magId: JSON.parse(JSON.stringify(magId)),
      pageCount: Math.ceil(productsTotal / nPerPage),
    },
  };
}

export default Test;
