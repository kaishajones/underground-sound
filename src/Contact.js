import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <footer id="resigeterForm">
        <h1 class="titles">Contact Us</h1>
        <input type="text" name="name" placeholder="Name" class="feedback-input" id="name" />
        <input type="text" placeholder="Email" name="email" class="feedback-input" id="name" />
        <textarea type="text" id="message" class="feedback-input" placeholder="Write Us..."></textarea>
      </footer>
    )
  }
}

export default Contact;
