import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "Prabhakar ",
      lname: "kumar",
      email: "dddd@gmail.com",
      password: "ddddddd",
      contact: 9989898998,
      address: "delhi",
      date: "",
    };
  }




handlechange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
} 
  handleSubmit =(event) =>{
      alert(JSON.stringify(this.state))
      event.preventDefault();

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
