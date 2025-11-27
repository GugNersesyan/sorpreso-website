import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar.tsx";

export default function MenuPage() {
  return (
    <div className="menu_container">
      <SideBar />
      <div className="menu_content">
        <Outlet />
      </div>
    </div>
  );
}

