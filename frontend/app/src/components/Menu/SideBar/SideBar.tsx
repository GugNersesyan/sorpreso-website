import { NavLink } from "react-router-dom";
import { sidebar } from "./SideBar";
import  "./Sidebar.css";


export default function SideBar() {
  return (
    <div className="left_side_bar">
      <ul className="side_bar_list">
        {sidebar.map((item, i) => (
          <li className="side_bar_item" key={i}>
            <NavLink to={`/menu/${item.path}`}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
