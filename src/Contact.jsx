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
    const saveForm = (e) => {
      e.preventDefault();
      console.log(this.state);
      alert("Form Submitted successfully");
      this.setState({
        username: "",
        useremail: "",
        userno: "",
        usermsg: "",
      });
      window.location.href='/';
    };
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
              <form action="" onSubmit={(e) => saveForm(e)}>
                <div className="row">
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

                  <div className="col-12 text-center my-3">
                    <button type="submit" className="btn btn-success">Submit</button>
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
