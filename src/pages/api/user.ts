import { getDatabase } from "../../database";
import { getSession } from "next-auth/client";

export default async (request, response) => {
  const mongodb = await getDatabase();
  const session = await getSession({ req: request });
  
  if(session){
    const user = await mongodb.db().collection("users").findOne({email: session.user.email})
      response.json(user);

  } else {
      response.json({});
  }
};

