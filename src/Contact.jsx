import React from "react";

class Contact extends React.Component{

  

  render(){
    return (
      <>
        <div className="row m-0 p-0">
          <div className="col-md-6 col-12 p-5">
            <h1 className="" style={{ fontVariant: "small-caps" }}>
              Contact Us
            </h1>
            <h6 className="fw-normal">
              Feel free to reach out to our friendly team. We’re here to help!
            </h6>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-2 col-12 p-2" style={{ height: "30vh" }}>
            <img src="images/contact.webp" height="100%" width="100%" alt="" />
          </div>
        </div>
  
        <div className="row m-0 py-3">
          <h5 className="text-center" style={{ fontVariant: "small-caps" }}>
            Enquiry Form
          </h5>
  
          <div className="col-md-6 col-12 py-5 m-auto">
            <div className="row">
              <form action="" method="post">
                <div className="row">
                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" name="" />
                  </div>
  
                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" name="" />
                  </div>
  
                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Phone No.</label>
                    <input type="text" className="form-control" name="" />
                  </div>
  
                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Message(if any)</label>
                    <input type="text" className="form-control" name="" />
                  </div>
  
                  <div className="col-12 text-center my-3">
                    <button className="btn btn-success">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Contact;
