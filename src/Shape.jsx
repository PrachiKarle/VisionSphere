import React from "react";
import './App.css';

const Shape = () => {
  const shape = [
    {
      img: "images/a1.jpg",
      name: "Aviator",
    },
    {
      img: "images/a66.jpg",
      name: "Wayfarer",
    },
    {
      img: "images/a77.jpg",
      name: "Oval",
    },
    {
      img: "images/a33.jpg",
      name: "Hexa",
    },
    {
      img: "images/a55.jpg",
      name: "Transparent",
    },
    {
      img: "images/a2.jpg",
      name: "Cateye",
    },
  ];
  return (
    <>
      {/* shape */}
      <div className="row m-0 p-2">
        <h3 className="text-center" style={{ fontVariant: "small-caps" }}>
          Wear The Trend
        </h3>
        <div className="col-12 p-3">
          <div className="row m-0 p-0 py-5">
            {shape.map((val, i) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-12 p-2 text-center" id="id1"
                   style={{height:"25vh"}}
                  >
                    <img src={val.img} alt="" height="70%"/>
                    <h6 className="text-center py-2">{val.name}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Shape;
