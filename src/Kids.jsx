import React, { useState } from "react";
import { kid1, kid2, kid3 } from "./KidsData";
import './App.css';
import Products from "./Products";

const Kids = () => {

  const Kid1=kid1;
  const Kid2=kid2;
  const Kid3=kid3;

  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const style1 = { border: "1px solid #599FE4", color: "#599FE4" };
  const style2 = { border: "1px solid black", color: "black" };

  const [d1, setD1] = useState(style1);
  const [d2, setD2] = useState(style2);
  const [d3, setD3] = useState(style2);

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
                style={d1}
              >
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  2-5 yrs
                </b>
              </div>

              <div
                onClick={() => Change2()}
                className="p-2"
                style={d2}
              >
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  5-8 yrs
                </b>
              </div>

              <div
                onClick={() => Change3()}
                className="p-2"
                style={d3}
              >
                <b className="fw-normal" style={{ fontSize: "small" }}>
                  8-12 yrs
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>


       {/* 2-5 yrs */}
       {state1 ? (
        <>
          <div className="row m-0 p-5" >
            <Products data={Kid1}/>
          </div>
        </>
      ) : null}

      {/* 5-8 yrs */}
      {state2 ? (
        <>
          <div className="row m-0 p-5">
             <Products data={Kid2}/>
          </div>
        </>
      ) : null}

      {/* 8-12 yrs */}
      {state3 ? (
        <>
          <div className="row m-0 p-5">
             <Products data={Kid3}/>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Kids;
