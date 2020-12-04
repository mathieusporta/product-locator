import { Header } from "../../components/header";
import { getDatabase } from "../../database";
import Link from "next/link";

const Deleteproduct = ({ products }) => {
  return (
    <>
      <Header />
      <div className="container mt-5 bg-light p-5 border border-danger">
        <h1 className="mt-4 text-center text-danger font-weight-bold ">
          Are you sure to delete ?
        </h1>
        <h1 className="mt-4 text-center"> Designation : {products.designation}</h1>
        <h3 className="mt-4 text-center"> Reference : {products.reference}</h3>
        <div className="row mt-4">
          <div className="col-6 ">
            <form method="Post" action="/api/delete/deleteProduct">
              <input type="hidden" name="id" value={products._id}></input>


              <button className="btn btn-success w-100">Delete</button>
            </form>
          </div>
          <div className="col-6">
            <Link href={`/admin/${products.enseigne_id}`}>
              <button className="btn btn-danger w-100">Cancel</button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Deleteproduct;

export async function getServerSideProps(context) {
  const deleted = context.params.delete;
  const mongodb = await getDatabase();

  const products = await mongodb
    .db()
    .collection("products")
    .findOne({ reference: deleted });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
