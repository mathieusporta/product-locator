import { request } from "http";
import { getDatabase } from "../../database";

export default async (request, response) => {
  const mongodb = await getDatabase();
  if (request.method === "POST") {
    const newProduct = {
      reference: request.body.reference,
      designation: request.body.designation,
      rayon: request.body.rayon,
      largeurY: request.body.largeurY,
      largeurX: request.body.largeurX,
    };
    mongodb.db().collection("products").insertOne(newProduct);
    response.redirect("/admin/admin");
    response.end();
  }
  else {
      response.statusCode=405;
      response.end;
  }
};
