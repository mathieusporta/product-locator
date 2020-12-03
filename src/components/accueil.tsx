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
  MDBMask,
  MDBCarouselItem,
  MDBCarousel,
} from "mdbreact";
import SearchBarSection from "../components/SearchBarSection";
import { Carousel } from "react-bootstrap";

const Accueil = () => {
  return (
    <>
      <div className="carou w-100">
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselItem itemId="1">
              <img
                className="d-block himage"
                src="/Logo_Decathlon.png"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <img
                className="d-block himage"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Leroy_Merlin.svg"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <img
                className="d-block himage"
                src="https://upload.wikimedia.org/wikipedia/fr/4/46/Logo_Boulanger_2004.svg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <img
                className="d-block himage"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_actuel_de_Norauto.png"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBContainer>
      </div>

      <MDBContainer className= "cardlocator text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <MDBCardBody >
                <MDBCardTitle className="h2">PRODUCT LOCATOR </MDBCardTitle>
                <p className="blue-text my-4 font-weight-bold">
                  A localisation application for your favorite product
                </p>
                <MDBCardText>
                  The "product locator" is a functionality allowing the visitor
                  of a website or the user of a mobile application to visualize
                  which are the physical points of sale within which the desired
                  product is available.
                </MDBCardText>
                <hr className="my-4" />
                <div className="paginateCenter">
                  <SearchBarSection />
                </div>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Accueil;
