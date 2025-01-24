import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      useremail: "",
      userpass: "",
    };
  }

  render() {
    const signin = async (e) => {
      e.preventDefault();

      //login validation
      var LoginData = await axios.get("http://localhost:3000/accounts");
      var flag = false;

      LoginData.data.map((val, i) => {
        if (
          val.useremail === this.state.useremail &&
          val.userpass === this.state.userpass
        ) {
          flag = true;
          alert("Login Successfully!");
          this.setState({
            useremail: "",
            userpass: "",
          });
          window.location.href = "/";
        }
      });

      if (!flag) {
        alert("Invalid Login Credentials!");
        window.location.href = "/signin";
      }
    };

    return (
      <>
        <div className="row m-0 p-5">
          <div
            className="col-md-6 col-8 m-0 px-5 py-3 m-auto "
            style={{ boxShadow: "0 0 4px 2px rgb(234, 235, 236)" }}
          >
            <h5 className="text-center" style={{ fontVariant: "small-caps" }}>
              Log In
            </h5>
            <form action="" onSubmit={(e) => signin(e)}>
              <div className="form-group my-3">
                <label htmlFor="">
                  Email <sup className="text-danger">*</sup>
                </label>
                <input
                  type="email"
                  name="useremail"
                  required
                  className="form-control"
                  value={this.state.useremail}
                  onChange={(e) => this.setState({ useremail: e.target.value })}
                />
              </div>

              <div className="form-group my-3">
                <label htmlFor="">
                  Password <sup className="text-danger">*</sup>
                </label>
                <input
                  type="password"
                  name="username"
                  required
                  className="form-control"
                  value={this.state.userpass}
                  onChange={(e) => this.setState({ userpass: e.target.value })}
                />
              </div>
              <div className="form-group my-3 text-center">
                <button className="btn btn-dark">Sign in</button>
              </div>
            </form>

            <h6
              className="text-center fw-normal my-3"
              style={{ fontSize: "small" }}
            >
              New Here ?{" "}
              <NavLink to="/account" className="text-dark">
                Create Account
              </NavLink>
            </h6>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
