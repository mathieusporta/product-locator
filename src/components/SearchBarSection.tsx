import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchBarSection = () => {

  return (
    <>
      <div className="d-flex justify-content-center">
        <MDBCol md="6">
          <form
            method="GET"
            className="form-inline mt-4 mb-4"
            action="/listeProduits"
          >
            <MDBIcon icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
              name="search"
            />
           
          </form>
        </MDBCol>
      </div>
    </>
  );
};
export default SearchBarSection;
