import React from "react";
import { Header } from "../components/header";
import { getDatabase } from "../database";
import MagasinVisu from "../components/magasin";
import PaginationVisu from "../components/pagination";
import TableauProduitVisu from "../components/tableauProduits";

const ListeProduit = ({ products, shop, currentPage, pageCount }) => {
  return (
    <>
      <Header />
      <div>
        <TableauProduitVisu products={products} />
        <PaginationVisu currentPage={currentPage} pageCount={pageCount} />
      </div>
      <MagasinVisu products={products} shop={shop} />
    </>
  );
};

export async function getServerSideProps(context) {
  const searchwithRegex = context.query.search;
  const page = context.query.page || 1;
  const nPerPage = 5;

  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .find({ designation: new RegExp(searchwithRegex, "i") })
    .skip(page > 0 ? (page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();

  const productsTotal = await mongodb
    .db()
    .collection("products")
    .find({ designation: new RegExp(searchwithRegex, "i") })
    .count();

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
      // currentPage,
      pageCount: Math.ceil(productsTotal / nPerPage),
    },
  };
}
export default ListeProduit;
