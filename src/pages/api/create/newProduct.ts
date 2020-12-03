import { getDatabase } from "../../../database";
import slugify from "slug";

export default async (request, response) => {
  const mongodb = await getDatabase();
  const slug = slugify(request.body.rayon);
  console.log(request.body);
  
  if (request.method === "POST") {
    const newProduct = {
      reference: request.body.reference,
      designation: request.body.designation,
      rayon: request.body.rayon,
      largeurY: request.body.largeurY,
      largeurX: request.body.largeurX,
      slug: slug,
    };

    mongodb.db().collection("products").insertOne(newProduct);
    response.redirect("/admin/"+request.body.id);
    response.end();
  } else {
    response.statusCode = 405;
    response.end;
  }
};
