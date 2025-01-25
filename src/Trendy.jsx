import React, { useState } from "react";
import "./App.css";
import Shape from "./Shape";

const Trendy = () => {
  // Featured Products
  const products = [
    "images/1.webp",
    "images/2.webp",
    "images/3.webp",
    "images/tf4.webp",
    "images/tf2.webp",
    "images/tf3.webp",
  ];

  // Best Sellers
  const products1 = [
    "images/4.webp",
    "images/5.webp",
    "images/7.webp",
    "images/tt1.webp",
    "images/tt2.webp",
    "images/tt3.webp",
  ];

  // New Products
  const products2 = [
    "images/8.webp",
    "images/9.webp",
    "images/10.webp",
    "images/ty1.webp",
    "images/ty2.webp",
    "images/ty3.webp",
  ];

  const [showProd1, setShow1] = useState(true);
  const [cls1, setcls1] = useState("b1");
  const [showProd2, setShow2] = useState(false);
  const [cls2, setcls2] = useState("b2");
  const [showProd3, setShow3] = useState(false);
  const [cls3, setcls3] = useState("b2");

  const change1 = () => {
    setShow1(true);
    setcls1("b1");
    setShow2(false);
    setcls2("b2");
    setShow3(false);
    setcls3("b2");
  };

  const change2 = () => {
    setShow1(false);
    setcls1("b2");
    setShow2(true);
    setcls2("b1");
    setShow3(false);
    setcls3("b2");
  };

  const change3 = () => {
    setShow1(false);
    setcls1("b2");
    setShow2(false);
    setcls2("b2");
    setShow3(true);
    setcls3("b1");
  };

  return (
    <>
      {/* trending */}
      <div className="row m-0 p-5">
        <div className="col-12 text-center">
          <b className="fw-normal text-secondary" style={{ fontSize: "small" }}>
            TOP PRODUCTS
          </b>
          <h2
            className="fw-bold text-dark"
            style={{ fontVariant: "small-caps" }}
          >
            Trending Products
          </h2>

          <div
            className="my-3"
          >
            <p
              className="fw-normal fs-medium mx-3"
              id={cls1}
              onClick={() => change1()}
            >
              Featured Products
            </p>
            <p
              className="fw-normal fs-medium mx-3"
              id={cls2}
              onClick={() => change2()}
            >
              
              Best Sellers
            </p>
            <p
              className="fw-normal fs-medium mx-3"
              id={cls3}
              onClick={() => change3()}
            >
              
              New Products
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="row m-0 p-0">
            {/* Featured Products */}
            {showProd1 ? (
              <>
                {products.map((val, i) => {
                  return (
                    <>
                      <div className="col-lg-4 col-sm-6 col-12 p-4">
                        <img
                          src={val}
                          className=""
                          height="90vh"
                          width="90%"
                          alt=""
                        />
                      </div>
                    </>
                  );
                })}
              </>
            ) : null}

            {/* Best Sellers  */}
            {showProd2 ? (
              <>
                {products1.map((val, i) => {
                  return (
                    <>
                      <div className="col-lg-4 col-sm-6 col-12 p-4">
                        <img
                          src={val}
                          className=""
                          height="90vh"
                          width="90%"
                          alt=""
                        />
                      </div>
                    </>
                  );
                })}
              </>
            ) : null}

            {/* New Products */}
            {showProd3 ? (
              <>
                {products2.map((val, i) => {
                  return (
                    <>
                      <div className="col-lg-4 col-sm-6 col-12 p-4">
                        <img
                          src={val}
                          className=""
                          height="90vh"
                          width="90%"
                          alt=""
                        />
                      </div>
                    </>
                  );
                })}
              </>
            ) : null}
          </div>
        </div>
      </div>

      <Shape />
    </>
  );
};

export default Trendy;
