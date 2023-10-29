// **** Library Imports ****
import { Outlet } from "react-router-dom";

// ***** Local Imports ****
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const DasbhoardLayout = () => {
  return (
    <>
      <Navbar />
      {/* <div className="h-16 shrink-0" /> */}
      <div className="flex h-full shrink-0 pt-[64px]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default DasbhoardLayout;
