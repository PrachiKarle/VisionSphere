import React, { useState } from "react";
import { halfrim, fullrim, rimless } from "./EyeglassesData";
import './App.css';
import Products from "./Products";

const EyeGlasses = () => {
  const HalfRim = halfrim;
  const FullRim = fullrim;
  const Rimless = rimless;

  const style1={border:'1px solid #599FE4',color:'#599FE4'};
  const style2={border:'1px solid black',color:'black'}

  const [d1,setD1]=useState(style1);
  const [d2,setD2]=useState(style2);
  const [d3,setD3]=useState(style2);

  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const Change1 = () => {
    setState1(true);
    setState2(false);
    setState3(false);

    setD1(style1)
    setD2(style2);
    setD3(style2);
  };
  const Change2 = () => {
    setState2(true);
    setState1(false);
    setState3(false);
    setD1(style2)
    setD2(style1);
    setD3(style2);
  };
  const Change3 = () => {
    setState3(true);
    setState2(false);
    setState1(false);
    setD1(style2)
    setD2(style2);
    setD3(style1);
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
            <div className="col-md-3 col-6 my-4 d-flex justify-content-between m-auto">
              <div
                onClick={() => Change1()}
                className="p-2" style={d1}
              >
                <img src="images/Halfrim.webp" className="img-fluid" alt="" />{" "}
                <br />
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  Half Rim
                </b>
              </div>
              <div
                onClick={() => Change2()}
                className="p-2" style={d2}
              >
                <img src="images/Fullrim.webp" className="img-fluid" alt="" />
                <br />
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  Full Rim
                </b>
              </div>
              <div
                onClick={() => Change3()}
                className="p-2" style={d3}
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

     {/* halfrim */}
     {state1 ? (
        <>
          <div className="row m-0 p-5">
            <Products data={HalfRim}/>
          </div>
        </>
      ) : null}

      {/* fullrim */}
      {state2 ? (
        <>
          <div className="row m-0 p-5">
            <Products data={FullRim}/>
          </div>
        </>
      ) : null}

      {/* Rimless */}
      {state3 ? (
        <>
          <div className="row m-0 p-5">
            <Products data={Rimless}/>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default EyeGlasses;
