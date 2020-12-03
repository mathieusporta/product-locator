import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const RayonVisue = ({ product }) => {
  const idProduct = `${product.largeurX} / ${product.largeurY}`;
  const styles = {
    row: {
      height: "80px",
    },
  };
  return (
    <div className="tablo">
      <h1>Retrouver votre produit en un clin d'oeil</h1>
      
      <MDBContainer>
      <div className="X">
        <h1>X</h1>
      </div>
       
        <MDBRow style={styles.row}>
          {idProduct === "1 / 4" ? (
            <MDBCol size="4" id="1 / 4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" id="1 / 4" className="col-4"></MDBCol>
          )}
          {idProduct === "2 / 4" ? (
            <MDBCol size="4" id="2 / 4" className="col-4 ">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" id="2 / 4" className="col-4"></MDBCol>
          )}
          {idProduct === "3 / 4" ? (
            <MDBCol size="4" id="3 / 4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" id="3 / 4" className="col-4"></MDBCol>
          )}
        </MDBRow>
        <MDBRow style={styles.row}>
          {idProduct === "1 / 3" ? (
            <MDBCol size="4" id="1 / 3" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" id="1 / 3" className="col-4"></MDBCol>
          )}
          {idProduct === "2 / 3" ? (
            <MDBCol size="4" id="2 / 3" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" id="2 / 3" className="col-4"></MDBCol>
          )}
          {idProduct === "3 / 3" ? (
            <MDBCol size="4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" className="col-4"></MDBCol>
          )}
        </MDBRow>
        <MDBRow style={styles.row}>
          {idProduct === "1 / 2" ? (
            <MDBCol size="4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" className="col-4"></MDBCol>
          )}
          {idProduct === "2 / 2" ? (
            <MDBCol size="4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" className="col-4"></MDBCol>
          )}
          {idProduct === "3 / 2" ? (
            <MDBCol size="4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" className="col-4"></MDBCol>
          )}
        </MDBRow>
        <MDBRow style={styles.row}>
          {idProduct === "1 / 1" ? (
            <MDBCol size="4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" className="col-4"></MDBCol>
          )}
          {idProduct === "2 / 1" ? (
            <MDBCol size="4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" className="col-4"></MDBCol>
          )}
          {idProduct === "3 / 1" ? (
            <MDBCol size="4" className="col-4">
              {/* {product.designation} */}
              <MDBIcon icon="check-circle" className="iconCheck" />
            </MDBCol>
          ) : (
            <MDBCol size="4" className="col-4"></MDBCol>
          )}
        </MDBRow>
      </MDBContainer>
     
      <div className="Y">
        <h1>Y</h1>
      </div>
      
    </div>
    
  );
};
export default RayonVisue;
