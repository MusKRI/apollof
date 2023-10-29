// Library Imports
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

// Local Imports
import LoginPage from "@/app/(auth)/login/page";
import DasbhoardLayout from "@/app/(dashboard)/layout";
import PagesPage from "@/app/(dashboard)/(routes)/pages/page";
import CurrentOpeningsPage from "@/app/(dashboard)/(routes)/current-openings/page";
import CurrentSingleOpening from "@/app/(dashboard)/(routes)/current-openings/[coId]/page";
import Homepage from "@/app/(dashboard)/(routes)/pages/HomePage/Homepage";
import SupplyChain from "@/app/(dashboard)/(routes)/pages/HomePage/SupplyChain";
import People from "@/app/(dashboard)/(routes)/pages/HomePage/People";
 
import Carrer from "@/app/(dashboard)/(routes)/pages/HomePage/Carrer";
import Business from "@/app/(dashboard)/(routes)/pages/HomePage/Business";
import Aboutus from "@/app/(dashboard)/(routes)/pages/HomePage/Aboutus";
import ContactUs from "@/app/(dashboard)/(routes)/pages/HomePage/Contactus";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<Outlet />}>
        <Route element={<DasbhoardLayout />}>
          <Route path="/dashboard" element={<h1>Dashboard Home</h1>} />
          <Route path="/pages" element={<Outlet />}>
            <Route index element={<PagesPage />} />
            <Route path="home" element={<Homepage />} />
            <Route path="career" element={<Carrer />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="people-planet" element={<People />} />
            <Route path="our-business" element={<Business />} />
            <Route path="supply-chain" element={<SupplyChain />} />
            <Route path="aboutus" element={<Aboutus />} />
          </Route>
          <Route path="/current-openings" element={<Outlet />}>
            <Route index element={<CurrentOpeningsPage />} />
            <Route path=":coId" element={<CurrentSingleOpening />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
