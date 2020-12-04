import React from "react";
import { Card, Button } from "react-bootstrap";
import { Header } from "../components/header";
// import SearchBarAdmin from "../components/SearchBarSection";

const CardExample = () => {
  return (
    <>
      <Header />

      {/* //SearchBarAdmin non fonctionnel en V1 */}
      {/* <SearchBarAdmin /> */}
      <div className="container">
        <h1 className="text-center mt-4 mb-4">List Shop</h1>
        <div className="cardState">
          <Card
            className="no-wrap mt-4 mb-4 mr-4"
            text-align="webkit-center"
            style={{ width: "18rem" }}
          >
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Leroy_Merlin.svg"
              className="p-4 logoEnseigne"
            />
            <Card.Body className="mt-3">
              <Card.Title className="text-center">Leroy Merlin</Card.Title>
              <Card.Text>
                Leroy Merlin vous acoompagne dans tout vos projets, de la
                construction, à la finition.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button
                variant="primary"
                href="/enseignes/5fc50531f3c2b1662658430d"
                // className="bouton1 no-wrap mt-3 "
              >
                Liste de nos produits
              </Button>
            </Card.Footer>
          </Card>

          <Card
            className="no-wrap mt-4 mb-4 mr-4"
            text-align="webkit-center"
            style={{ width: "18rem" }}
          >
            <Card.Img
              className="no-wrap p-4 logoEnseigne"
              variant="top"
              src="/Logo_Decathlon.png"
            />
            <Card.Body className="mt-3">
              <Card.Title className="text-center ">Decathlon</Card.Title>
              <Card.Text className="no-wrap">
                Decathlon vous propose une game de produits sportifs de qualités
                adaptés à tous vos besoins.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button
                className="no-wrap"
                variant="primary"
                href="/enseignes/5fc50557f3c2b1662658430e"
              >
                Liste de nos produits
              </Button>
            </Card.Footer>
          </Card>
          <Card
            className="no-wrap mt-4 mb-4 mr-4"
            text-align="webkit-center"
            style={{ width: "18rem" }}
          >
            <Card.Img
              className="no-wrap  p-4 logoEnseigne"
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/fr/4/46/Logo_Boulanger_2004.svg"
            />
            <Card.Body className="mt-3">
              <Card.Title className="text-center ">Boulanger</Card.Title>
              <Card.Text className="no-wrap ">
                Boulanger dispose des équipements que vous avez besoin pour
                votre maison.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button className="no-wrap" variant="primary">
                Liste de nos produits
              </Button>
            </Card.Footer>
          </Card>

          <Card
            className="no-wrap mt-4 mb-4 mr-4"
            text-align="webkit-center"
            style={{ width: "18rem" }}
          >
            <Card.Img
              className="no-wrap p-4 logoEnseigne"
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_actuel_de_Norauto.png"
            />
            <Card.Body className="mt-3">
              <Card.Title className="text-center">Norauto</Card.Title>
              <Card.Text className="no-wrap mt-4">
                Norauto c'est une gamme de pièce détachées et de services pour
                votre voiture.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button className="bouton1no-wrap  " variant="primary">
                Liste de nos produits
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardExample;
