import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "/src/styles/overview.css";

// import "/src/styles/discountedMat.css"

const Overview = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="overview-container">
    <h1>Welcome</h1>
     <p>
     Welcome to ArtCorner - Empowering Artisans to Craft Their Success. More than just a marketplace, ArtCorner is a thriving community dedicated to the growth and success of artisans. We are steadfast in our commitment to providing resources that empower your artistry and bolster your business.</p>
    </div>
  );
};

export default Overview;
// <div className="user-creditials"> Welcome {currentUser?.displayName}</div>
// <div>{currentUser?.displayName}</div>
// <div>{currentUser?.email}</div>
// <div>{currentUser?.uid}</div>
// <div
//   style={{
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     overflow: "hidden",
//   }}
// >
//   <img src={currentUser?.photoURL} alt="profile photo" />
// </div>

 // <p>To our Artisan! Our dashboard is the central hub where artisans like you can manage and showcase your creative journey. From tracking sales and orders to purchasing dicsounted materials, having access to trained personel in different field of endeovour from novice to mastery and engaging with customers, our intuitive dashboard empowers you to take control of your artisan business effortlessly. Access insightful analytics, customize your storefront, and connect with a vibrant community of fellow artisans. Whether you are a seasoned pro or just starting, our dashboard provides the tools and support you need to thrive in the world of handmade craftsmanship</p>
