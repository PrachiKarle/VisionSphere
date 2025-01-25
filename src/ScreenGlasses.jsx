import React, { useState } from "react";
import { fullrim, rimless } from "./ScreenglassesData";
import "./App.css";
import Products from "./Products";

const ScreenGlasses = () => {
  const FullRim = fullrim;
  const Rimless = rimless;

  const style1 = { border: "1px solid #599FE4", color: "#599FE4" };
  const style2 = { border: "1px solid black", color: "black" };

  const [d1, setD1] = useState(style1);
  const [d2, setD2] = useState(style2);

  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(false);

  const Change2 = () => {
    setState2(true);
    setState3(false);
    setD1(style1)
    setD2(style2);
  };
  const Change3 = () => {
    setState3(true);
    setState2(false);
    setD1(style2)
    setD2(style1);
  };
  return (
    <div style={{backgroundColor:"#F7F2F1"}}>
      <div className="row m-0 p-0">
        <div className="col-12 py-3 text-center">
          <h5
            className="fw-normal"
            style={{ fontVariant: "small-caps", fontSize: "larger" }}
          >
            Frame Type
          </h5>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 my-4 d-flex justify-content-between m-auto">
              <div onClick={() => Change2()} className="p-2" style={d1}>
                <img src="images/Fullrim.webp" className="img-fluid" alt="" />
                <br />
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  Full Rim
                </b>
              </div>
              <div onClick={() => Change3()} className="p-2" style={d2}>
                <img src="images/Rimless.webp" className="img-fluid" alt="" />
                <br />
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  Half Rim
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fullrim */}
      {state2 ? (
        <>
          <div className="row m-0 p-4">
            <Products data={FullRim} />
          </div>
        </>
      ) : null}

      {/* Rimless */}
      {state3 ? (
        <>
          <div className="row m-0 p-4">
            <Products data={Rimless} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ScreenGlasses;
