import { Header } from "../../components/header";
import { getDatabase } from "../../database";
import Link from "next/link";

const Deleteproduct = ({ products }) => {
  return (
    <div>
      <Header />
      <h1>Are you sure to delete </h1>
      <h2> reference : {products.reference}</h2>
      <div className="row">
        <div className="col-6">
          <form method="Post" action="/api/delete/deleteProduct">
            <input type="hidden" name="id" value={products._id}></input>

            <button className="btn btn-success w-100">Delete</button>
          </form>
        </div>
        <div className="col-6">
          <Link href="/admin/admin">
            <button className="btn btn-danger w-100">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Deleteproduct;

export async function getServerSideProps(context) {
  const toto = context.params.delete;
  const mongodb = await getDatabase();
  const shop = await mongodb.db().collection("shop").find().toArray();
  const products = await mongodb
    .db()
    .collection("products")
    .findOne({ reference: toto });

  return {
    props: {
      shop: JSON.parse(JSON.stringify(shop)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
