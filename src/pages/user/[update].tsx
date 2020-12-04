import React from "react";
import FormUpdateUser from "../../components/updateUserForm";
import { getDatabase } from "../../database";

const formUpdateUser = ({ user }) => {
  return (
    <>
      <FormUpdateUser user={user} />
    </>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  console.log(context.params.update);
  const email = context.params.update;

  const user = await mongodb.db().collection("users").findOne({ email: email });

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default formUpdateUser;
