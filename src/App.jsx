import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/layout/LandingPage";
import Login from "./components/common/Login";
import Signup from "./components/common/Signup";
import ContactUs from "./components/common/ContactUs";
import Aboutcars from "./components/addcar/Aboutcars";
import CarComparison from "./components/layout/CarComparison";
import PrivateRoutes from "./components/hooks/PrivateRoutes";
import UserSidebar from "./components/layout/UserSidebar";
import "./index.css";
import About from "./components/layout/About";
import Review from "./components/layout/Review";
import Dealers from "./components/layout/Dealers";
import MyCar from "./components/layout/MyCar";
import Financing from "./components/layout/Financing";
import Listing from "./components/layout/Lisiting";
import AboutDup from "./components/layout/AboutDup";
import Service from "./components/layout/Service";
import ContactUs2 from "./components/common/ContactUs2";
import Messages from "./components/layout/Messages";
import Alert from "./components/layout/Alert";
import ForgotPassword from "./components/common/ForgotPassword";
import ResetPassword from "./components/common/ResetPassword";
import ContactSuperAdmin from "./components/common/ContactSuperAdmin";
import AdminD from "./admin/AdminD"; // Ensure correct path
import TestDrive from "./components/layout/TestDrive";
import AdminCarList from "./admin/AdminCarList";
import CarDetails from "./components/layout/CarDetails";
import SalesReport from "./admin/SalesReport";
import { BankComponent } from "./components/Payment/BankComponent";
import PaymentList from "./admin/PaymentList";



function App() {
  axios.defaults.baseURL = "http://localhost:3000"; // Ensure this is correct

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setUserRole(storedRole);
  }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutdup" element={<AboutDup />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus2" element={<ContactUs2 />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/contactsuperadmin" element={<ContactSuperAdmin />} />

        {/* Admin Route */}
        <Route path="/admin" element={<AdminD />} />
          <Route path="/admincarlist" element={<AdminCarList />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/salesreport" element={<SalesReport />} />
          <Route path="/paymentlist" element={<PaymentList />} />

        {/* Protected User Routes */}
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/user" element={<UserSidebar />}>
            <Route path="" element={<MyCar />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="aboutcars" element={<Aboutcars />} />
            <Route path="comparison" element={<CarComparison />} />
            <Route path="review" element={<Review />} />
            <Route path="dealers" element={<Dealers />} />
            <Route path="financing" element={<Financing />} />
            <Route path="listing" element={<Listing />} />
            <Route path="alert" element={<Alert />} />
            <Route path="testdrive" element={<TestDrive />} />
            <Route path="cardetails" element={<CarDetails />} />
            <Route path="payment" element={<BankComponent />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
