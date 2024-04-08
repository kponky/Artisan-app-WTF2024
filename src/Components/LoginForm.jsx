import React,{useState} from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
// import logo from "../assets/Logo.png";
// import groupVector from "../assets/Group.png";



const LoginForm = () => {

  onst [formData, setFormData] = useState({
    email: "",
    password: ""
      
  });
  return (
    <div>
      this is my login form
    </div>
  )
}

export default LoginForm
