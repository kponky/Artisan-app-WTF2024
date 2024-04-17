import DashboardHeader from "../Components/DashboardHeader";
import DashboardSidebar from "../Components/DashboardSidebar";
import { Navigate, Outlet } from "react-router-dom";
import "../styles/layout.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const DashboardLayout = () => {
  const { userLoggedIn } = useContext(AuthContext);

  if (!userLoggedIn) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <div className="dashboard">
      <div className="sidebar-container">
        <DashboardSidebar />
      </div>
      <div className="inner-wrapper">
        <DashboardHeader />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
