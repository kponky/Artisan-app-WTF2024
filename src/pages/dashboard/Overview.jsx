import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// import "/src/styles/discountedMat.css"

const Overview = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div>Welcome {currentUser?.displayName}</div>
      <div>{currentUser?.email}</div>
      // <div>{currentUser?.uid}</div>
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
