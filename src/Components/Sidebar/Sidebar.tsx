import SidebarBrands from "../Sidebar-Brands/Sidebar-Brands";
import SidebarColors from "../SIdebar-Colors/Sidebar-Colors";
import SidebarRange from "../Sidebar-Range/Sidebar-Range";
import SidebarSizes from "../Sidebar-Brands/Sidebar-Sizes";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-content-align">
        <section className="sidebar-contant">
          <SidebarBrands />
          <SidebarRange />
          <SidebarColors />
          <SidebarSizes />
        </section>
      </div>
    </aside>
  );
}

export default Sidebar;
