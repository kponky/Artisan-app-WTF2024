import React from "react";
import emailJs from 'emailjs-com'



const ContactForm = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData  = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    emailJs.send('service_7ezgial', 'template_ul3et4s', formData, 'c5IQtB_nojaZE5V4s')
.then((response) =>{
 alert('Email sent succesfully:', response);
  e.target.reset();
})
.catch((error) =>{
  console.log('Error sending email', error);
})
    
  }
  return (
    <div className="contact-form">
      <form onSubmit = {handleSubmit}>
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
            className="form-control" 
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
