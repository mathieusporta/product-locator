import { getDatabase } from "../../../database";
import { ObjectId } from "mongodb";

export default async (request, response) => {
  const mongodb = await getDatabase();
  

  if (request.method === "POST") {
    const newUser = {
      name: request.body.name,
      firstname: request.body.firstname,
      enseigne: request.body.enseigne,
    };

    // response.json(newProduct);

    mongodb
      .db()
      .collection("users")
      .updateOne({ _id: new ObjectId(request.body.id) }, { $set: newUser });
    response.redirect("/");
    response.end();
  } else {
    response.statusCode = 405;
    response.end;
  }
};
