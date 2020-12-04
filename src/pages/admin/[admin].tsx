import React from "react";
import { Header } from "../../components/header";
import SearchBarAdmin from "../../components/SearchBarAdmin";
import TableauProduitsAdmin from "../../components/tableauProduitsAdmin";
import { getDatabase } from "../../database";
import Pagination from "../../components/pagination";
import { useSession } from "next-auth/client";

const Test = ({ magId, currentPage, pageCount }) => {
  const [session, loading] = useSession();

  if (loading) {
    return <h1 className="text-center mt-5 text-primary">Loading...</h1>;
  }
  return (
    <div>
      <Header />
      {session ? (
        <>
          <SearchBarAdmin />
          <TableauProduitsAdmin products={magId} />
          <Pagination currentPage={currentPage} pageCount={pageCount} />
        </>
      ) : (
        <h2 className="text-center mt-5">
          <img src="https://i.imgur.com/Gp6wNZr.gif" />
        </h2>
      )}
    </div>
  );
};

export default Test;

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const mag = context.params.admin;
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

  const productsTotal = await mongodb
    .db()
    .collection("products")
    .find({ enseigne_id: mag, designation: new RegExp(searchwithRegex, "i") })
    .count();

  return {
    props: {
      magId: JSON.parse(JSON.stringify(magId)),
      pageCount: Math.ceil(productsTotal / nPerPage),
    },
  };
}
