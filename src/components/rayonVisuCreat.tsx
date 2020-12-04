import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


const RayonVisuCreate = () => {
  const styles = {
    row: {
      height: "80px",
    },
  };
  return (
    <div>
      <MDBContainer>
        <MDBRow style={styles.row}>
          <MDBCol size="4" id="1 / 4" className="col-4">

            1  x / 4 y
          </MDBCol>

          <MDBCol size="4" id="2 / 4" className="col-4 ">
            2 x / 4 y
          </MDBCol>

          <MDBCol size="4" id="3 / 4" className="col-4">
            3 x / 4 y

          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" id="1 / 3" className="col-4">

            1 x / 3 y
          </MDBCol>

          <MDBCol size="4" id="2 / 3" className="col-4">
            2 x / 3 y
          </MDBCol>

          <MDBCol size="4" className="col-4">
            3 x / 3 y

          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" className="col-4">

            1 x / 2 y
          </MDBCol>

          <MDBCol size="4" className="col-4">
            2 x / 2 y
          </MDBCol>

          <MDBCol size="4" className="col-4">
            3 x / 2 y

          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" className="col-4">

            1 x / 1 y
          </MDBCol>

          <MDBCol size="4" className="col-4">
            2 x / 1 y
          </MDBCol>

          <MDBCol size="4" className="col-4">
            3 x / 1 y

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default RayonVisuCreate;
