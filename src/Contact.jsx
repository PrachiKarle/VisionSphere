import axios from "axios";
import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      useremail: "",
      userno: "",
      usermsg: "",
    };
  }

  render() {
    const saveForm = async (e) => {
      e.preventDefault();
      console.log(this.state);
      alert("Message send successfully!");

      await axios.post("http://localhost:3000/Contacts", this.state);
      this.setState({
        username: "",
        useremail: "",
        userno: "",
        usermsg: "",
      });
      window.location.href = "/";
    };

    return (
      <>
        <div className="row m-0 p-0" style={{ backgroundColor: "#F7F2F1" }}>
          <div className="col-lg-9 col-md-8 col-12 p-5">
            <div className="row">
              <div className="col-lg-8 col-12">
                <h1 className="" style={{ fontVariant: "small-caps" }}>
                  Contact Us
                </h1>
                <h6 className="fw-normal">
                  Feel free to reach out to our friendly team. We’re here to
                  help!
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-12 p-5" style={{height:"55vh"}}>
            <img src="images/contact.webp" height="100%" width="100%" alt="" />
          </div>
        </div>

        <div className="row m-0 py-5" style={{ backgroundColor: "#F7F2F1" }}>
          <div
            className="col-lg-6 col-md-8 col-12 p-5 m-auto"
            style={{
              backgroundColor: "white",
              boxShadow: "0 0 5px 2px #EBEBEB",
            }}
          >
            <h5 className="text-center" style={{ fontVariant: "small-caps" }}>
              Enquiry Form
            </h5>
            <div className="row">
              <form action="" onSubmit={(e) => saveForm(e)}>
                <div className="row pt-5">
                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="useremail"
                      value={this.state.useremail}
                      onChange={(e) =>
                        this.setState({ useremail: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Phone No.</label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      value={this.state.userno}
                      onChange={(e) =>
                        this.setState({ userno: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6 col-12 form-group my-2">
                    <label htmlFor="">Message(if any)</label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      value={this.state.usermsg}
                      onChange={(e) =>
                        this.setState({ usermsg: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-12 text-center mt-5">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
