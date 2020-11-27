import React from "react";
import { Header } from "../../components/header";
import SearchBarAdmin from "../../components/SearchBarAdmin";
import TableauProduitsAdmin from "../../components/tableauProduitsAdmin";
import { getDatabase } from "../../database";
import Pagination from "../../components/pagination";

const Admin = ({ products, currentPage, pageCount }) => {
  return (
    <div>
      <Header />
      <SearchBarAdmin />
      <TableauProduitsAdmin products={products} />
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </div>
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

export default Admin;
