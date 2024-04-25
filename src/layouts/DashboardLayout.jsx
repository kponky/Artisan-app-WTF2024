import DashboardHeader from "../Components/DashboardHeader";
import DashboardSidebar from "../Components/DashboardSidebar";
import { Navigate, Outlet } from "react-router-dom";
import "../styles/layout.css";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Cart from "../Components/Cart";

const DashboardLayout = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [openCart, setOpenCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // if (!userLoggedIn) {
  //   return <Navigate to={"/login"} replace={true} />;
  // }

  return (
    <div className="dashboard">
      <div className={`sidebar-container ${showSidebar && "show"}`}>
        <DashboardSidebar
        showSidebar = {setShowSidebar}
        setShowSidebar={setOpenCart} 
        />
      </div>
      <div className="inner-wrapper">
        <DashboardHeader 
        openCart={openCart} 
        setOpenCart={setOpenCart}
        setShowSidebar={setShowSidebar} />
        {openCart && (
          <div className="cart-modal">
            <Cart setOpenCart={setOpenCart} />
          </div>
        )}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
