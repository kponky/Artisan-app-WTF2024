// SignupForm.jsx
import React, { useState } from 'react';
import '../App.css'
import logo  from '../assets/Logo.png'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (

    <div className='SignupFormContainer'>
    <img src={logo}/>
    <div className='formText'>
    <h6>Hi, Welcome to ArtCorner!</h6>
    <p>Create an account and start enjoying ArtCorner</p>
    </div>


    <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="username"
      placeholder="Username"
      value={formData.username}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={handleChange}
      required
    />

    <div> tick icon
    <p>By continuing, you acknowledge that you have read, understood and consent to the  Privacy Policy of Artcorner</p> 
    
    </div>

    <button type="submit">Sign Up</button>
     
    <div> <p>Already have an account? Sign in</p></div>
    <span> Or Continue with</span>

    <button type="submit">Google</button>
    <button type="submit">Outlook</button>

      

  </form>    
    
    </div>
   
  );
};

export default SignupForm;
