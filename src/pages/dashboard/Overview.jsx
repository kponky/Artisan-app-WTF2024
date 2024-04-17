import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "/src/styles/overview.css";

// import "/src/styles/discountedMat.css"

const Overview = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="overview-container">
      <div className="user-creditials">Welcome {currentUser?.displayName}</div>
      <div>{currentUser?.email}</div>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img src={currentUser?.photoURL} alt="profile photo" />
      </div>
    </div>
  );
};

export default Overview;
