import React from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import { Header } from "../components/header";
import SearchBarAdmin from "../components/SearchBarSection";

const CardExample = () => {
  return (
      
    <>
     <Header/>
      <SearchBarAdmin/>
      <div className="cardState">
        <Card
          className="no-wrap mt-4 mb-4"
          text-align="webkit-center"
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Leroy_Merlin.svg"
          />
          <Card.Body>
            <Card.Title className="text-center">Leroy Merlin</Card.Title>
            <Card.Text>
             Leroy Merlin vous acoompagne dans tout vos projets, de la construction, à la finition.
            </Card.Text>
            <Button
              variant="primary"
              href="/enseignes/5fc50531f3c2b1662658430d"
            >
              Liste de nos produits
            </Button>
          </Card.Body>
        </Card>

        <Card
          className="no-wrap mt-4 mb-4"
          text-align="webkit-center"
          style={{ width: "18rem" }}
        >
          <Card.Img className="no-wrap mt-5" variant="top" src="/Logo_Decathlon.png" />
          <Card.Body>
            <Card.Title className="text-center">Decathlon</Card.Title>
            <Card.Text className="no-wrap mt-4">
              Decathlon vous propose une game de produits sportifs de qualités adaptés à tous vos besoins.
            </Card.Text>
            <Button
            className="no-wrap mt-5"
              variant="primary"
              href="/enseignes/5fc50557f3c2b1662658430e"
            >
              Liste de nos produits
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardExample;
