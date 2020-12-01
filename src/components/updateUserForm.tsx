import React from "react";
import Link from "next/link";

const updateUser = ({ user }) => {
    const [name, setName] = React.useState(user.name);
    const [firstname, setFirstname] = React.useState(user.firstname);
    const [enseigne, setEnseigne] = React.useState(user.enseigne);
    // const [role, setRole] = React.useState(user.role);
  return (
    <div className="container">
      <h1>Update Product</h1>
      <form
        method="POST"
        action="/api/update/updateUser"
        className="bg-light p-4 border border-dark rounded mt-5"
      >
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              className="form-control"
              id="firstname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="enseigne">Enseigne</label>
            <select
              className="form-control"
              id="enseigne"
              name="enseigne"
              value={enseigne}
              onChange={(event) => setEnseigne(event.target.value)}
            >
              <option>Leroy Merlin</option>
              <option>Decathlon</option>
            </select>
          </div>
            <input type="hidden" name="id" value={user._id}></input>
        </fieldset>

        <div className="row text-center mt-4">
          <div className="col-6">
            <button
              className="btn btn-success text-center w-100"
              id="validateAdd"
              type="submit"
            >
              Validate
            </button>
          </div>
          <div className="col-6">
            <Link href="/">
              <button
                type="submit"
                className="btn btn-danger text-center w-100"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default updateUser;
