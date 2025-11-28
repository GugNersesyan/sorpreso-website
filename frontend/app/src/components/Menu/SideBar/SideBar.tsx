import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { sidebar } from "./SideBar";
import "./Sidebar.css";


export default function SideBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const contactsElement = document.querySelector('.contacts');

    if (!contactsElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px 0px 0px'
      }
    );

    observer.observe(contactsElement);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className={`left_side_bar ${!isVisible ? 'hidden' : ''}`}>
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
