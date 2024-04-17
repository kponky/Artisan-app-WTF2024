import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import ContactUs from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdvanceTrain from "./pages/dashboard/AdvanceTrain";
import DiscountedMat from "./pages/dashboard/DiscountedMat";
import Networking from "./pages/dashboard/Networking";
import Overview from "./pages/dashboard/Overview";
import Settings from "./pages/dashboard/Settings";
import ShowcaseSales from "./pages/dashboard/ShowcaseSales";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path='advance-training' element = {<AdvanceTrain/>}></Route>
          <Route path='discounted-materials' element ={<DiscountedMat/>}></Route>
          <Route path='networking' element ={<Networking/>}></Route>
          <Route path='showcase-sales' element ={<ShowcaseSales/>}></Route>
          <Route path='settings' element ={<Settings/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
// <Route path="/aboutus" element={<Aboutus/>} />
