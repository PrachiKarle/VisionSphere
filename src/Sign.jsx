import React from "react";
import { NavLink } from "react-router-dom";

class Sign extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      useremail: "",
      userno: "",
      userpass: "",
    };
  }

  render() {

    const CreateAcc = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.setState({
        username: "",
        useremail: "",
        userno: "",
        userpass: "",
      });
      window.location.href='/';
    };

    return (
      <>
        <div className="row m-0 p-5">
          <div
            className="col-md-6 col-8 m-0 px-5 py-3 m-auto "
            style={{ boxShadow: "0 0 4px 2px rgb(234, 235, 236)" }}
          >
            <h5 className="text-center" style={{ fontVariant: "small-caps" }}>
              Create Account
            </h5>
            <form action="" onSubmit={(e) => CreateAcc(e)}>
              <div className="form-group my-3">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="useremail"
                  className="form-control"
                  value={this.state.useremail}
                  onChange={(e) => this.setState({ useremail: e.target.value })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="">Contact No</label>
                <input
                  type="text"
                  name="userno"
                  className="form-control"
                  value={this.state.userno}
                  onChange={(e) => this.setState({ userno: e.target.value })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="username"
                  className="form-control"
                  value={this.state.userpass}
                  onChange={(e) => this.setState({ userpass: e.target.value })}
                />
              </div>
              <div className="form-group my-3 text-center">
                <button className="btn btn-dark">Create Account</button>
              </div>
            </form>

            <h6
              className="text-center fw-normal my-3"
              style={{ fontSize: "small" }}
            >
              Already Account ?{" "}
              <NavLink to="/signin" className="text-dark">
                Sign in
              </NavLink>
            </h6>
          </div>
        </div>
      </>
    );
  }
}

export default Sign;
