import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name">Name</input>
        <input type="text" placeholder="Email">Email</input>
        <textarea type="text" placeholder="Write Us..."></textarea>
      </div>
    )
  }
}