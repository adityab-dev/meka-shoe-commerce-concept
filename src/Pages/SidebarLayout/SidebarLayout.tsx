import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

import './SidebarLayout.css'

function SidebarLayout() {
    return (
        <div className="side-layout-container">
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default SidebarLayout;
