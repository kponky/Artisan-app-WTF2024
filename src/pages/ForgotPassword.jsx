import React from 'react'
import ForgotPasswordPage from '../Components/ForgotPasswordPage'

const ForgotPassword = () => {
  return (
    <div>
  <ForgotPasswordPage/>
    </div>
  )
}

export default ForgotPassword



// import React, { useState } from "react";
// import { auth } from "../firebase";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState(null);

//   const handleResetPassword = async () => {
//     try {
//       await auth.sendPasswordResetEmail(email);
//       setMessage("Password reset email sent. Please check your inbox.");
//       setError(null);
//     } catch (error) {
//       setError("Failed to send password reset email. Please try again.");
//       setMessage(null);
//     }
//   };

//   return (
//     <div>
//       <h2>Forgot Password</h2>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleResetPassword}>Reset Password</button>
//       {error && <div>{error}</div>}
//       {message && <div>{message}</div>}
//     </div>
//   );
// };

// export default ForgotPassword;