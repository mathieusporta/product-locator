import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const RayonVisuClient = ({ product }) => {
  const idProduct = `${product.largeurX} / ${product.largeurY}`;

  const styles = {
    row: {
      height: "80px",
    },
  };

  return (
    <div>
      <h1 className="text-center mb-5 mt-5">Your product is localize here </h1>
      <h3 className="text-center">
        Designation :{" "}
        <span className="mb-5 mt-5 badge badge-primary">
          {product.designation}
        </span>
      </h3>
      <h3 className="text-center">
        Reference :{" "}
        <span className="mb-5 badge badge-primary">{product.reference}</span>
      </h3>
      <MDBContainer>
        <MDBRow style={styles.row}>
          <MDBCol size="4" id="1 / 4">
            {idProduct === "1 / 4" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" id="2 / 4">
            {idProduct === "2 / 4" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" id="3 / 4" className="col-4">
            {idProduct === "3 / 4" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" id="1 / 3" className="col-4">
            {idProduct === "1 / 3" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" id="2 / 3" className="col-4">
            {idProduct === "2 / 3" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" className="col-4" id="3 / 3">
            {idProduct === "3 / 3" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" className="col-4" id="1 / 2">
            {idProduct === "1 / 2" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" className="col-4" id="2 / 2">
            {idProduct === "2 / 2" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" className="col-4" id="3 / 2">
            {idProduct === "3 / 2" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>

        <MDBRow style={styles.row}>
          <MDBCol size="4" className="col-4">
            {idProduct === "1 / 1" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" className="col-4" id="2 / 1">
            {idProduct === "2 / 1" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol size="4" className="col-4" id="3 / 1">
            {idProduct === "3 / 1" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default RayonVisuClient;
