import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Link from "next/link";

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
                  <td>
                    <Link
                      href="/update/[update]"
                      as={`/update/${produit.reference}`}
                    >
                      <button className="btn btn-warning">Update</button>
                    </Link>
                  </td>
                  <Link href="/delete/[delete]" as={`/delete/${produit.reference}`}>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </Link>
                </tr>
              );
            })}
        </MDBTableBody>
      </MDBTable>
      <Link href="/create/newProduct" passHref>
        <button className="btn btn-success w-100">Add</button>
      </Link>
    </>
  );
};

export default TableauProduitsAdmin;
