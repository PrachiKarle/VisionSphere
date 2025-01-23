import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="row m-0 p-3">
        <div className="col-lg-3 col-sm-6 col-12 p-3">
          {/* About */}
          <a
            href="#"
            className="text-decoration-none display-4 text-dark fw-bold"
          >
            <img src="images/logo.png" className="img-fluid" alt="" />
            <span className="fw-bold px-2" style={{ fontSize: "medium" }}>
              VisionSphere
            </span>
          </a>
          <p className="pt-5">
            Explore our wide range of stylish frames, advanced lenses, and
            contact lenses tailored to your vision needs.
          </p>
        </div>

        {/* help */}
        <div className="col-lg-2 col-sm-6  col-12 p-3">
          <h5 className="py-2">HELP</h5>

          <p className="my-2">Term & policy </p>
          <p className="my-2">Press</p>
          <p className="my-2">Careers</p>
          <p className="my-2">Delivery</p>
          <p className="my-2">Service</p>
        </div>

        {/* info */}
        <div className="col-lg-2 col-sm-6  col-12 p-3">
          <h5 className="py-2">INFO</h5>

          <p className="my-2">Contact Us </p>
          <p className="my-2">About Us</p>
          <p className="my-2">Careers</p>
          <p className="my-2">Our Stories</p>
          <p className="my-2">Press</p>
        </div>

        {/* POLICY */}
        <div className="col-lg-2 col-sm-6  col-12 p-3">
          <h5 className="py-2 ">POLICY</h5>

          <p className="my-2"> Return Policy </p>
          <p className="my-2">Terms Of Use</p>
          <p className="my-2">Security</p>
          <p className="my-2">Privacy</p>
          <p className="my-2">Sitemap</p>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-3">
          <h5>CONTACT US</h5>
          <p className="my-2"><i class="bi bi-geo-alt-fill"></i>  99 New Theme St. XY, USA 12345,
          Beside the Sun point land.</p>
          <p className="my-2"><i class="bi bi-telephone"></i>   +00 123-456-789</p>
          <p className="my-2"><i class="bi bi-envelope"></i>  demo@example.com</p>
        </div>
        
      </footer>
      
      <div className="row m-0 p-2 bg-light"style={{borderTop:'1px solid gray'}}>
        <h6 className="text-secondary fw-normal text-center">© 2025 VisionSphere. All Rights Reserved.</h6>
      </div>
    </>
  );
};

export default Footer;
