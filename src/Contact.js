import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <footer id="box-5">
        <h2 className="titles">Contact Us</h2>
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Name" />
        <label for="email">Email:</label>
        <input type="text" placeholder="Email" name="email" />
        <textarea type="text" placeholder="Write Us..."></textarea>
      </footer>
    )
  }
}

export default Contact;