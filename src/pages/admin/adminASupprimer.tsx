// import React from "react";
// import { Header } from "../../components/header";
// import SearchBarAdmin from "../../components/SearchBarAdmin";
// import TableauProduitsAdmin from "../../components/tableauProduitsAdmin";
// import { getDatabase } from "../../database";
// import Pagination from "../../components/pagination";
// import { useSession } from "next-auth/client";

// const Admin = ({ products, currentPage, pageCount }) => {
//   const [session, loading] = useSession();
//   if(loading){
//     return <h1 className="text-center mt-5 text-primary">Loading...</h1>
//   }
//   return (
//     <div>
//       <Header />
//       {session ? (
//         <>
//           <SearchBarAdmin />
//           <TableauProduitsAdmin products={products} />
//           <Pagination currentPage={currentPage} pageCount={pageCount} />
//         </>
//       ) : (
//         <h2 className="text-center mt-5"><img src="https://i.imgur.com/Gp6wNZr.gif" /></h2>
//       )}
//     </div>
//   );
// };

// export async function getServerSideProps(context) {
//   const searchwithRegex = context.query.search;
//   const page = context.query.page || 1;
//   const nPerPage = 5;

//   const mongodb = await getDatabase();
//   const shop = await mongodb.db().collection("shop").find().toArray();
//   const products = await mongodb
//     .db()
//     .collection("products")
//     .find({ designation: new RegExp(searchwithRegex, "i") })
//     .skip(page > 0 ? (page - 1) * nPerPage : 0)
//     .limit(nPerPage)
//     .toArray();

//   const productsTotal = await mongodb
//     .db()
//     .collection("products")
//     .find({ designation: new RegExp(searchwithRegex, "i") })
//     .count();

//   return {
//     props: {
//       shop: JSON.parse(JSON.stringify(shop)),
//       products: JSON.parse(JSON.stringify(products)),
//       // currentPage,
//       pageCount: Math.ceil(productsTotal / nPerPage),
//     },
//   };
// }

// export default Admin;
