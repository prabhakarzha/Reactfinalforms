import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      contact: '',
      address: "",
      date: "",
    };
  }




handlechange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
    
} 
  handleSubmit =(event) =>{
      alert(JSON.stringify(this.state))
      event.preventDefault();

      const { fname, lname,email, password, cpassword,contact,address,date } = this.state;

      
    if (password !== cpassword) {
      alert("passwords don't match");
      return;
    }



  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="fname">
              <label htmlFor="fname">First Name</label>

              <input
                placeholder="First Name"
                value={this.state.fname}
                type="text"
                name="fname"
                onChange={this.handlechange}
                required
              />
            </div>

            <div className="lname">
              <label htmlFor="lname">Last Name</label>
              <input
                placeholder="Last Name"
                value={this.state.lname}
                type="text"
                name="lname"
                onChange={this.handlechange}
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                placeholder="Email-id"
                value={this.state.email}
                type="email"
                name="email"
                autoComplete="off"
                onChange={this.handlechange}
                required
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>

              <input
                placeholder="Password"
                value={this.state.password}
                type="password"
                name="password"
                onChange={this.handlechange}
                required
              />
            </div>
            <div className="contact">
              <label htmlFor="motor">Contact Number</label>
              <input
                placeholder="Contact Number"
                value={this.state.contact}
                type="contact"
                name="contact"
                onChange={this.handlechange}
                required
              />
            </div>

            <div className="cpassword">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                placeholder="Confirm Password"
                value={this.state.cpassword}
                type="cpassword"
                name="cpassword"
                autoComplete="off"
                onChange={this.handlechange}
                required
              />
            </div>

            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                placeholder="Address"
                value={this.state.address}
                type="text"
                name="address"
                onChange={this.handlechange}
                required
              />
            </div>

            <div className="date">
              <label htmlFor="date">Date</label>
              <input
                placeholder="Date"
                value={this.state.date}
                type="date"
                name="date"
                onChange={this.handlechange}
                required
              />
            </div>

            <div className="Submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
