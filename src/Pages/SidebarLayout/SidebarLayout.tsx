import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";

function SidebarLayout() {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default SidebarLayout;
