import { getDatabase } from "../../../database";
import { ObjectId } from "mongodb";

export default async (request, response) => {
  const mongodb = await getDatabase();
  const deleteProduct = request.body.id;
  if (deleteProduct !== null) {
    await mongodb
      .db()
      .collection("products")
      .deleteOne({ _id: new ObjectId(deleteProduct) });

    response.redirect("/admin/admin");
    response.statusCode = 204;
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }
};
