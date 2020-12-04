import React, { useEffect } from "react";
import { getDatabase } from "../../database";
import RayonVisue from "../../components/rayonVisuUpdate";
import { Header } from "../../components/header";
import UpdateProductVisu from "../../components/crudProducts/updateProduct";
import { useSession } from "next-auth/client";

const UpdateProduct = ({ products, shop, decathlon }) => {
  const [Visible, setVisible] = React.useState("");
  const [hauteurRayon, setHauteurRayon] = React.useState(products.largeurY);
  const [largeurRayon, setLargeurRayon] = React.useState(products.largeurX);
  const [session, loading] = useSession();
  const [user, setUser] = React.useState<{
    admin: boolean;
    enseigne_id: string;
  }>();

  useEffect(() => {
    fetch("/api/user")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        setUser(user);
      });
  }, [session]);
  if (loading) {
    return <h1 className="text-center mt-5 text-primary">Loading...</h1>;
  }
  return (
    <>
      <Header />
      <UpdateProductVisu
        products={products}
        shop={shop}
        decathlon={decathlon}
        setLargeurRayon={setLargeurRayon}
        setHauteurRayon={setHauteurRayon}
        largeurRayon={largeurRayon}
        hauteurRayon={hauteurRayon}
      />
      <RayonVisue
        product={products}
        setLargeurRayon={setLargeurRayon}
        setHauteurRayon={setHauteurRayon}
        Visible={Visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default UpdateProduct;

export async function getServerSideProps(context) {
  const toto = context.params.update;
  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const decathlon = await mongodb.db().collection("decathlon").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .findOne({ reference: toto });

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
      decathlon: JSON.parse(JSON.stringify(decathlon)),
    },
  };
}
