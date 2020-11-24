import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

const Accueil = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <MDBCardBody>
              <MDBCardTitle className="h2">PRODUCT LOCATOR </MDBCardTitle>
              <p className="blue-text my-4 font-weight-bold">
                A localisation application for your favorite product
              </p>
              <MDBCardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fugit voluptates laudantium saepe. Facilis, facere. Commodi molestias at consectetur aliquid fugit atque quas eligendi aspernatur! Ratione aspernatur similique eligendi vel!</MDBCardText>
              <hr className="my-4" />
              <div className="pt-2">
                <button color="primary" className="btn btn-primary">
                  Magasin
                </button>
                <button color="primary" className="btn btn-primary">
                  Rayon
                </button>
              </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Accueil;
