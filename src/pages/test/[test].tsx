import React from "react";
import {getDatabase} from "../../database";

const Test = ({magId}) => {
    return(
        <>
        <h1>Salut</h1>
        {JSON.stringify(magId)}
        </>
    )
}

export default Test;

export async function getServerSideProps(context) {
    const mongodb = await getDatabase();
    const mag = context.params.test;
  
    const magId = await mongodb
      .db()
      .collection("products")
      .find({ enseigne_id: mag })
      .toArray();
    const shop = await mongodb.db().collection("shop").find().toArray();
    const enseigne = await mongodb.db().collection("enseigne").find().toArray();
    const users = await mongodb.db().collection("users").find().toArray();
    const decathlon = await mongodb.db().collection("decathlon").find().toArray();
    const products = await mongodb.db().collection("products").find().toArray();
  
    return {
      props: {
        shop: JSON.parse(JSON.stringify(shop)),
        products: JSON.parse(JSON.stringify(products)),
        enseigne: JSON.parse(JSON.stringify(enseigne)),
        users: JSON.parse(JSON.stringify(users)),
        decathlon: JSON.parse(JSON.stringify(decathlon)),
        magId: JSON.parse(JSON.stringify(magId)),
      },
    };
  }