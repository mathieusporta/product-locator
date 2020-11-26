import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableauProduitVisu = ({ products }) => {
  return (
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
  );
};
export default TableauProduitVisu;
