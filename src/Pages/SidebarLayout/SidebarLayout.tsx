import { Outlet } from "react-router-dom";

import Sidebar from "../../Components/Sidebar/Sidebar";

import "./SidebarLayout.css";

function SidebarLayout() {
  return (
    <div className="side-layout-container">
      <div className="side-layout-center">
        <div className="sidebarlayout-sidebar-container">
          <Sidebar />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SidebarLayout;
