import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <h6> Send a Message </h6>
        <div className="input-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter Full Name"
            className="form-control"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter E-mail"
            className="form-control"
          />
        </div>

        <div className="input-group">
          <label htmlFor="message"> Message: </label>
          <textarea
            id="message"
            name="message"
            required
            className="form-control" style={{height: "160px"}}
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
