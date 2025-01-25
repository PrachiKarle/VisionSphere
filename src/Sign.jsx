import axios from "axios";
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

    const CreateAcc = async(e) => {
      e.preventDefault();

      //login validation
      var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(regex.test(this.state.userpass))
      {
        if(this.state.userno.length>10)
        {
          alert("Please, Enter 10 Digit Contact Number!");
          window.location.href='/sign';
        }
        else{
          console.log(this.state);
          alert("Account Created successfully!")
          await axios.post('http://localhost:3000/accounts',this.state);
          this.setState({
            username: "",
            useremail: "",
            userno: "",
            userpass: "",
          });
          window.location.href = "/signin";
        }
       
      }
      else{
        alert("Please, Enter Strong Password!");
        window.location.href='/sign';
      }
     
    };

    return (
      <div style={{ backgroundColor: "#F7F2F1" }}>
        <div className="row m-0 p-5">
          <div
            className="col-lg-6 col-md-10 col-12 m-0 px-5 py-3 m-auto "
            style={{ boxShadow: "0 0 4px 2px rgb(234, 235, 236)",backgroundColor:"white" }}
          >
            <h5 className="text-center" style={{ fontVariant: "small-caps" }}>
              Create Account
            </h5>
            <form action="" onSubmit={(e) => CreateAcc(e)}>
              <div className="form-group my-3">
                <label htmlFor="">Name <sup className="text-danger">*</sup></label>
                <input
                  type="text" required
                  name="username"
                  className="form-control"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="">Email <sup className="text-danger">*</sup></label>
                <input
                  type="email" required
                  name="useremail"
                  className="form-control"
                  value={this.state.useremail}
                  onChange={(e) => this.setState({ useremail: e.target.value })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="">Contact No <sup className="text-danger">*</sup></label>
                <input
                  type="text"
                  name="userno" required
                  className="form-control"
                  value={this.state.userno}
                  onChange={(e) => this.setState({ userno: e.target.value })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="">Password <sup className="text-danger">*</sup></label>
                <input
                  type="password" required
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
      </div>
    );
  }
}

export default Sign;
