import React from "react";
import {advanceData} from "../../data/advanceTraininData"
import "/src/styles/discountedMat.css";
import ProductCard from "../../Components/ProductCard";

const AdvanceTrain = () => {
  return (
    <div className="disc-container">
      <div className="disc-heading">
        <h6>Advance Training</h6>
        <p>
          Master Your Craft: This part emphasizes the idea of becoming a master
          or expert in your artisan craft. It suggests a focus on skill
          enhancement and proficiency.
        </p>
      </div>

      <div className="discounted-card">
      {advanceData.map((item, i) => (
        <ProductCard key={i} {...item} />
      ))}
    </div>
    </div>
  );
};

export default AdvanceTrain;

//   return (
//     <div className="disc-container">
//     <div className="disc-heading">
//       <h6>Advance Training</h6>
//       <p>Master Your Craft: This part emphasizes the idea of becoming a master or expert in your artisan craft. It suggests a focus on skill enhancement and proficiency.
//       </p>
//     </div>

//     <div className="discounted-card">
//       <div className="card-items">
//         <img src={img1} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />

//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn"> Add to Cart</button>
//       </div>
//       <div className="card-items">
//         <img src={img2} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn "> Add to Cart</button>
//       </div>
//       <div className="card-items">
//         <img src={img3} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />

//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn"> Add to Cart</button>
//       </div>
//       <div className="card-items">
//         <img src={img4} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />

//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn"> Add to Cart</button>
//       </div>
//       <div className="card-items">
//         <img src={img3} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />

//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn"> Add to Cart</button>
//       </div>
//       <div className="card-items">
//         <img src={img2} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />

//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn"> Add to Cart</button>
//       </div>
//       <div className="card-items">
//         <img src={img1} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />

//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn"> Add to Cart</button>
//       </div>
//       <div className="card-items">
//         <img src={img4} alt="" className="card-img" />
//         <div className="item1">
//           <p>Item Name</p>
//           <span>
//             $ <span>16.</span>50
//           </span>
//         </div>
//         <div className="item2">
//           <div className="stars">
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <FontAwesomeIcon icon={faStar} className="icon" />
//             <span>(91)</span>
//           </div>
//           <div className="price">
//             <p>
//               $ <span>20.</span>00
//             </p>
//           </div>
//         </div>
//         <button className="btn"> Add to Cart</button>
//       </div>
//     </div>
//   </div>
//   )
// }
