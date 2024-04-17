import DashboardHeader from "../Components/DashboardHeader";
import DashboardSidebar from "../Components/DashboardSidebar";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";

const DashboardLayout = () => {
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
