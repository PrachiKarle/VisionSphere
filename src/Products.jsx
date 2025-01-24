import React from 'react';
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./App.css";

const Products = (props) => {
  return (
    <>
     {props.data.map((val, i) => {
              return (
                <>
                  <div className="col-md-4 col-sm-6 col-12 p-4" key={i}>
                    <div
                      className="w-100 p-2 prod"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="card-header">
                        <Checkbox
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite color="error" />}
                        />
                      </div>

                      <div className="card-body">
                        <img src={val.img} className="img-fluid" alt="" />
                      </div>

                      <div className="card-footer px-3 pt-5">
                        <h6 className="fw-bold">{val.name}</h6>

                        <h6 className="fw-normal" style={{ fontSize: "small" }}>
                          Size: <b>{val.size}</b>
                        </h6>

                        <h6>Price: ₹ {val.Price}</h6>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
    </>
  )
}

export default Products