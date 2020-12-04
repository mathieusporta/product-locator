import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const RayonVisue = ({
  product,
  setLargeurRayon,
  setHauteurRayon,
  Visible,
  setVisible,
}) => {
  const [idProduct, setIdProduct] = useState(
    `${product.largeurX} / ${product.largeurY}`
  );


  const styles = {
    row: {
      height: "80px",
    },
  };

  return (
    <div>
      <MDBContainer>
        <MDBRow style={styles.row}>
          <MDBCol
            size="4"
            id="1 / 4"
            onClick={() => {
              setLargeurRayon("1");
              setHauteurRayon("4");
              setIdProduct("1 / 4");
            }}
          >
            {idProduct === "1 / 4" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            id="2 / 4"
            onClick={() => {
              setLargeurRayon("2");
              setHauteurRayon("4");
              setVisible(idProduct);
              setIdProduct("2 / 4");
            }}
          >
            {idProduct === "2 / 4" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            id="3 / 4"
            className="col-4"
            onClick={() => {
              setLargeurRayon("3");
              setHauteurRayon("4");
              setIdProduct("3 / 4");
            }}
          >
            {idProduct === "3 / 4" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol
            size="4"
            id="1 / 3"
            className="col-4"
            onClick={() => {
              setLargeurRayon("1");
              setHauteurRayon("3");
              setIdProduct("1 / 3");
            }}
          >
            {idProduct === "1 / 3" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            id="2 / 3"
            className="col-4"
            onClick={() => {
              setLargeurRayon("2");
              setHauteurRayon("3");
              setIdProduct("2 / 3");
            }}
          >
            {idProduct === "2 / 3" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            className="col-4"
            id="3 / 3"
            onClick={() => {
              setLargeurRayon("3");
              setHauteurRayon("3");
              setIdProduct("3 / 3");
            }}
          >
            {idProduct === "3 / 3" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol
            size="4"
            className="col-4"
            id="1 / 2"
            onClick={() => {
              setLargeurRayon("1");
              setHauteurRayon("2");
              setIdProduct("1 / 2");
            }}
          >
            {idProduct === "1 / 2" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            className="col-4"
            id="2 / 2"
            onClick={() => {
              setLargeurRayon("2");
              setHauteurRayon("2");
              setIdProduct("2 / 2");
            }}
          >
            {idProduct === "2 / 2" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            className="col-4"
            id="3 / 2"
            onClick={() => {
              setLargeurRayon("3");
              setHauteurRayon("2");
              setIdProduct("3 / 2");
            }}
          >
            {idProduct === "3 / 2" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>

        <MDBRow style={styles.row}>
          <MDBCol
            size="4"
            className="col-4"
            onClick={() => {
              setHauteurRayon("1");
              setLargeurRayon("1");
              setIdProduct("1 / 1");
            }}
          >
            {idProduct === "1 / 1" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            className="col-4"
            id="2 / 1"
            onClick={() => {
              setLargeurRayon("2");
              setHauteurRayon("1");
              setIdProduct("2 / 1");
            }}
          >
            {idProduct === "2 / 1" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
          <MDBCol
            size="4"
            className="col-4"
            id="3 / 1"
            onClick={() => {
              setLargeurRayon("3");
              setHauteurRayon("1");

              setIdProduct("3 / 1");

            }}
          >
            {idProduct === "3 / 1" ? (
              <MDBIcon icon="check-circle" className="iconCheck" />
            ) : null}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default RayonVisue;
