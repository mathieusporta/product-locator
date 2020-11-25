import React from "react";
import { getDatabase } from "../database";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

const ListeProduit = ({ products, shop, currentPage, pageCount }) => {

  const styles = {
    surface: {
      padding: "20px",
    },
  };
  
  const router = useRouter();
  // console.log(router);

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router
      .push({
        pathname: currentPath,
        query: currentQuery,
      })
      .then(() => window.scrollTo(0, 0));
  };

  return (
    <>
      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Réference</th>
              <th>Désignation</th>
              <th>Rayon</th>
            </tr>
          </MDBTableHead>
          {/* {JSON.stringify(products)} */}

          <MDBTableBody>
            {products &&
              products.map((produit, index) => {
                return (
                  <tr key={produit._id}>
                    <td>{index + 1}</td>
                    <td>{produit.reference}</td>
                    <td>{produit.designation}</td>
                    <td>{produit.rayon}</td>
                  </tr>
                );
              })}
          </MDBTableBody>
        </MDBTable>
        <div className="paginateCenter">
          <ReactPaginate
            onPageChange={paginationHandler}
            initialPage={currentPage - 1}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLabel="Precedent"
            nextLabel="Suivant"
            activeClassName="activated"
            breakLabel="..."
            pageClassName="paginate"
            containerClassName="custom-paginate"
          />
        </div>
      </div>
  
      <div>
        <MDBCol md="6">
          {/* <form
            method="GET"
            className="form-inline mt-4 mb-4"
            action="/listeProduits"
          >
            <MDBIcon icon="search" />
           
          </form> */}
        </MDBCol>
        <hr />
        <div className="magasin">
          <div className="topmag">
            <div className="ligneDeCaisse">Caisse</div>
            <div className="entree">Entrée</div>
          </div>
          {shop &&
            shop.map((magasin) => {
              return (
                <div style={styles.surface} key={magasin._id}>
                  <div className="rayon" id={magasin.slug}>
                    {magasin.name}
                    <br />
                    {products &&
                      products.map((produit) => {
                        return produit.slug === magasin.slug ? (
                          <MDBIcon icon="check" key={produit._id} />
                        ) : null;
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const toto = context.query.search;
  const page = context.query.page || 1;
  const nPerPage = 5;

  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .find({ designation: new RegExp(toto, "i") })
    .skip(page > 0 ? (page - 1) * nPerPage : 0)
    .limit(nPerPage)
    .toArray();

  const productsTotal = await mongodb
    .db()
    .collection("products")
    .find({ designation: new RegExp(toto, "i") })
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
