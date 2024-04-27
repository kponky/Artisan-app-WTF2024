import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import ContactUs from "./pages/ContactUs";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddProduct from "./pages/dashboard/AddProduct";
import Checkout from "./pages/dashboard/Checkout";
import Networking from "./pages/dashboard/Networking";
import Overview from "./pages/dashboard/Overview";
import Settings from "./pages/dashboard/Settings";
import ShowcaseSales from "./pages/dashboard/ShowcaseSales";
import SingleShowCasing from "./pages/dashboard/SingleShowCasing";
// import ShowcaseSinglePage from "./pages/dashboard/ShowcaseSinglePage";
import SingleNetworking from "./pages/dashboard/SingleNetworking";
import AdvanceTrain from "./pages/dashboard/advanced-training/AdvanceTrain";
import DiscountedMat from "./pages/dashboard/discounted-material/DiscountedMat";
import SinglePageDiscount from "./pages/dashboard/discounted-material/SinglePage";

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
          <Route path="advance-training" element={<AdvanceTrain />}></Route>

          <Route
            path="discounted-materials"
            element={<DiscountedMat />}
          ></Route>
          <Route
            path="discounted-materials/:id"
            element={<SinglePageDiscount />}
          ></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="networking" element={<Networking />}></Route>
          <Route path="networking/:id" element={<SingleNetworking />}></Route>
          <Route path="showcase-sales" element={<ShowcaseSales />}></Route>
          <Route path="showcase-sales/:id" element={<SingleShowCasing/>}></Route>
          <Route path="settings" element={<Settings />}></Route>
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
