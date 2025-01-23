import React, { useState } from "react";

const Kids = () => {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const Change1 = () => {
    setState1(true);
    setState2(false);
    setState3(false);
  };
  const Change2 = () => {
    setState2(true);
    setState1(false);
    setState3(false);
  };
  const Change3 = () => {
    setState3(true);
    setState2(false);
    setState1(false);
  };
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-12 py-3 text-center">
          <h5
            className="fw-normal"
            style={{ fontVariant: "small-caps", fontSize: "larger" }}
          >
            Frame Type
          </h5>
          <div
            className="p-2 m-auto"
            style={{ border: "1px solid", width: "6%" }}
          >
            <img src="images/Fullrim.webp" className="img-fluid" alt="" />
            <br />
            <b className="fw-normal" style={{ fontSize: "small" }}>
              Full Rim
            </b>
          </div>

          <h5
            className="fw-normal mt-4"
            style={{ fontVariant: "small-caps", fontSize: "larger" }}
          >
            Age Group
          </h5>
          <div className="row">
            <div className="col-md-2 col-4 my-4 d-flex justify-content-between m-auto">
              <div
                onClick={() => Change1()}
                className="p-2"
                style={{ border: "1px solid" }}
              >
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  2-5 yrs
                </b>
              </div>

              <div
                onClick={() => Change2()}
                className="p-2"
                style={{ border: "1px solid" }}
              >
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  5-8 yrs
                </b>
              </div>

              <div
                onClick={() => Change3()}
                className="p-2"
                style={{ border: "1px solid" }}
              >
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  8-12 yrs
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {state1 ? (
          <>
            <div className="row m-0 p-5 bg-dark"></div>
          </>
        ) : null}
        {state2 ? (
          <>
            <div className="row m-0 p-5 bg-dark"></div>
          </>
        ) : null}
        {state3 ? (
          <>
            <div className="row m-0 p-5 bg-dark"></div>
          </>
        ) : null}
    </>
  );
};

export default Kids;
