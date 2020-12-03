import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

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
            1 /4
          </MDBCol>

          <MDBCol size="4" id="2 / 4" className="col-4 ">
            2 /4
          </MDBCol>

          <MDBCol size="4" id="3 / 4" className="col-4">
            3 /4
          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" id="1 / 3" className="col-4">
            1 /3
          </MDBCol>

          <MDBCol size="4" id="2 / 3" className="col-4">
            2 / 3
          </MDBCol>

          <MDBCol size="4" className="col-4">
            3 / 3
          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" className="col-4">
            1 / 2
          </MDBCol>

          <MDBCol size="4" className="col-4">
            2 /2
          </MDBCol>

          <MDBCol size="4" className="col-4">
            2 / 3
          </MDBCol>
        </MDBRow>
        <MDBRow style={styles.row}>
          <MDBCol size="4" className="col-4">
            1 /1
          </MDBCol>

          <MDBCol size="4" className="col-4">
            1 / 2
          </MDBCol>

          <MDBCol size="4" className="col-4">
            1 / 3
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default RayonVisuCreate;
