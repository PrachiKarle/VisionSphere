import React from "react";
import "./App.css";
import Trendy from "./Trendy";

const Home = () => {
  const products = [
    {
      name: "Eyeglasses",
      img: "images/a1.webp",
    },
    {
      name: "Sunglasses",
      img: "images/a2.webp",
    },
    {
      name: "Screen Glasses",
      img: "images/a3.webp",
    },
    {
      name: "Contact Lenses",
      img: "images/a4.webp",
    },
    {
      name: "Power Sunglasses",
      img: "images/a5.webp",
    },
    {
      name: "Progressive Lenses",
      img: "images/a6.webp",
    },
  ];
  return (
    <>
      {/* carousel */}

      <div id="caroid" class="carousel slide" data-bs-ride="true">

        <div className="carousel-inner h-auto" >
          <div className="carousel-item active h-100 w-100">
            <img src="images/caro3.webp" className="d-block w-100 h-100" />
          </div>
          <div className="carousel-item h-100 w-100">
            <img src="images/caro2.png" className="d-block w-100 h-100" />
          </div>
          <div className="carousel-item h-100 w-100">
            <img src="images/caro1.webp" className="d-block w-100 h-100" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#caroid"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#caroid"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* products */}
      <div className="row m-0 p-2 py-5"  style={{backgroundColor:"#F7F2F1"}}>
        {products.map((val, i) => {
          return (
            <>
              <div className="col-lg-2 col-md-4 col-6 p-1 px-3">
                <div
                  className="row m-0 p-2"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "4%",
                    boxShadow: "0 0 5px 2px rgb(201, 201, 201);",
                  }}
                >
                  <img src={val.img} className="img-fluid" alt="" />
                  <h6 className="text-center text-secondary py-1 fw-normal">
                    {val.name}
                  </h6>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* services */}
      <div className="row m-0 py-5 px-2">
        <div
          className="col-lg-3 col-md-6 col-sm-12 text-center py-3"
        >
          <img src="images/s1.jpg" className="m-auto" height="80%" alt="" />
          <h6 className="my-1">Fast Shipping</h6>
        </div>
        <div
          className="col-lg-3 col-md-6 col-sm-12 text-center py-3"
        >
          <img src="images/s2.jpeg" className="m-auto" height="80%" alt="" />
          <h6 className="my-1">24 * 7 Support</h6>
        </div>
        <div
          className="col-lg-3 col-md-6 col-sm-12 text-center py-3"
        >
          <img src="images/s3.jpeg" className="m-auto" height="80%" alt="" />
          <h6 className="my-1">Easy Money Back</h6>
        </div>
        <div
          className="col-lg-3 col-md-6 col-sm-12 text-center py-3"
        >
          <img src="images/s4.jpeg" className="m-auto" height="80%" alt="" />
          <h6 className="my-1">Secure Payment</h6>
        </div>
      </div>

      {/* Trending Products */}
      <Trendy />
    </>
  );
};

export default Home;
