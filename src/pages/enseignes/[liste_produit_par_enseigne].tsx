import React from "react";
import TableauProduitVisu from "../../components/tableauProduits";
import { getDatabase } from "../../database";
import { Header } from "../../components/header";
import SearchBarAdmin from "../../components/SearchBarAdmin";
import Pagination from "../../components/pagination";
import { useRouter } from "next/router";
import MagasinVisu from "../../components/magasin";

const Test = ({ currentPage, pageCount, magId, decathlon, shop }) => {
  const [Visible, setVisible] = React.useState("");
  const router = useRouter();

  return (
    <>
      <Header />

      {router.query.liste_produit_par_enseigne ===
      "5fc50531f3c2b1662658430d" ? (
        <h1 className="text-center"> Leroy Merlin</h1>
      ) : (
        <h1 className="text-center"> Decathlon</h1>
      )}

      <SearchBarAdmin />

      <TableauProduitVisu
        products={magId}
        visible={Visible}
        setVisible={setVisible}
      />
      <Pagination currentPage={currentPage} pageCount={pageCount} />
      <MagasinVisu
        products={magId}
        shop={shop}
        decathlon={decathlon}
        visible={Visible}
      />
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
    .find({ enseigne_id: mag, designation: new RegExp(searchwithRegex, "i") })
    .skip(page > 0 ? (page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const decathlon = await mongodb.db().collection("decathlon").find().toArray();
  const products = await mongodb.db().collection("products").find().toArray();
  const productsTotal = await mongodb
    .db()
    .collection("products")
    .find({ enseigne_id: mag, designation: new RegExp(searchwithRegex, "i") })
    .count();

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
      decathlon: JSON.parse(JSON.stringify(decathlon)),
      magId: JSON.parse(JSON.stringify(magId)),
      pageCount: Math.ceil(productsTotal / nPerPage),
    },
  };
}

export default Test;
