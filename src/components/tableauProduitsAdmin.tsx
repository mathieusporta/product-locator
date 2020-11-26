import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";



const TableauProduitsAdmin = ({ products }) => {
  return (
      <>
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Réference</th>
          <th>Désignation</th>
          <th>Rayon</th>
          <th>Update</th>
          <th>Delete</th>
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
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
              </tr>
            );
          })}
      </MDBTableBody>
    </MDBTable>
     <button className="btn btn-success w-100">Add</button>
     </>
  );
};

export default TableauProduitsAdmin;

