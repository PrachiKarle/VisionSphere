import React, { useState } from "react";

const ScreenGlasses = () => {
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const Change2 = () => {
    setState2(true);
    setState3(false);
  };
  const Change3 = () => {
    setState3(true);
    setState2(false);
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
          <div className="row">
            <div className="col-md-2 col-4 my-4 d-flex justify-content-between m-auto">
              <div
                onClick={() => Change2()}
                className="p-2"
                style={{ border: "1px solid" }}
              >
                <img src="images/Fullrim.webp" className="img-fluid" alt="" />
                <br />
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  Full Rim
                </b>
              </div>
              <div
                onClick={() => Change3()}
                className="p-2"
                style={{ border: "1px solid" }}
              >
                <img src="images/Rimless.webp" className="img-fluid" alt="" />
                <br />
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  Rimless
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default ScreenGlasses;
