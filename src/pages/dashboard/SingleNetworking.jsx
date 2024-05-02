import React from "react";
import adminUserLogo from "../../assets/Group 2.png";
import adminImg from "../../assets/admin login illustration.png";
import artisanImg from "../../assets/login for artisan illustration.png";
import "../../styles/networking.css";

const SingleNetworking = () => {
  return (
    <div className="admin-user__wrapper">
      <div className="admin-text-card">
        <div className="admin-user-logo">
          <img src={adminUserLogo} alt="Logo" />
        </div>
        <div className="admin-user-logo-text">
          <h6>Who are you</h6>
        </div>
      </div>

      <div className="admin-user-img">
          <img src={adminImg} alt="" className="adminImg" />
           <img src={artisanImg} alt="" className="userImg" />
      </div>

      <div className="admin-user-text">
      <span> Admin <p> Artisan </p> </span>
    
      
      </div>
    </div>
  );
};

export default SingleNetworking;
