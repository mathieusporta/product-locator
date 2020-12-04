import { getDatabase } from "../../../database";
import slugify from "slug";
import { ObjectId } from "mongodb";

export default async (request, response) => {
  const mongodb = await getDatabase();
  const slug = slugify(request.body.rayon);

  if (request.method === "POST") {
    const newProduct = {
      reference: request.body.reference,
      designation: request.body.designation,
      rayon: request.body.rayon,
      largeurY: request.body.largeurY,
      largeurX: request.body.largeurX,
      slug: slug,
    };

    mongodb
      .db()
      .collection("products")
      .updateOne({ _id: new ObjectId(request.body.id) }, { $set: newProduct });
    response.redirect("/update/"+request.body.reference);
    response.end();
  } else {
    response.statusCode = 405;
    response.end;
  }
};
