import React from "react";
import { Header } from "../components/header";
import { getDatabase } from "../database";
import MagasinVisu from "../components/magasin";
import PaginationVisu from "../components/pagination";
import TableauProduitVisu from "../components/tableauProduits";
import SearchBarSection from "../components/SearchBarSection";

const ListeProduit = ({ products, shop, currentPage, pageCount }) => {
  const [Visible, setVisible] = React.useState("");
  return (
    <>
      <Header />
      <SearchBarSection />
      <div>
        <TableauProduitVisu
          products={products}
          visible={Visible}
          setVisible={setVisible}
        />
        <PaginationVisu currentPage={currentPage} pageCount={pageCount} />
      </div>
      <MagasinVisu products={products} shop={shop} visible={Visible} />
    </>
  );
};

export default ListeProduit;

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
