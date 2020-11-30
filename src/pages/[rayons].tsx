import React from "react";
import { getDatabase } from "../database";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Rayon = ({ product }) => {
  const idProduct = `${product.largeurX} / ${product.largeurY}`;
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          {
            idProduct === "1 / 4" ?
          <MDBCol size="4" id="1 / 4" className="col-4">
            {product.designation} 
          </MDBCol>
          : 
          <MDBCol size="4" id="1 / 4" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "2 / 4" ?
          <MDBCol size="4" id="2 / 4" className="col-4">
            {product.designation} 
          </MDBCol>
          : 
          <MDBCol size="4" id="2 / 4" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "3 / 4" ?
          <MDBCol size="4" id="3 / 4" className="col-4">
            {product.designation} 
          </MDBCol>
          :
          <MDBCol size="4" id="3 / 4" className="col-4">
            
          </MDBCol>
          }
        </MDBRow>
        <MDBRow>
          {
            idProduct === "1 / 3" ?
          <MDBCol size="4" id="1 / 3" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" id="1 / 3" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "2 / 3" ? 
          <MDBCol size="4" id="2 / 3" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" id="2 / 3" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "3 / 3" ?
          <MDBCol size="4" className="col-4">
          {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" className="col-4">
            
          </MDBCol>
          }
        </MDBRow>
        <MDBRow>
          {
            idProduct === "1 / 2" ?
          <MDBCol size="4" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "2 / 2" ?
          <MDBCol size="4" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "3 / 2" ?
          <MDBCol size="4" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" className="col-4">
            
          </MDBCol>
          }
        </MDBRow>
        <MDBRow>
        {
            idProduct === "1 / 1" ?
          <MDBCol size="4" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "2 / 1" ?
          <MDBCol size="4" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" className="col-4">
            
          </MDBCol>
          }
          {
            idProduct === "3 / 1" ?
          <MDBCol size="4" className="col-4">
            {product.designation}
          </MDBCol>
          :
          <MDBCol size="4" className="col-4">
            
          </MDBCol>
          }
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const refProduct = context.params.rayons;

  const product = await mongodb
    .db()
    .collection("products")
    .findOne({ reference: refProduct });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default Rayon;
