import { NavLink } from "react-router-dom"; //importerer navlink 
import "../styles/Nav.scss";

export default function Nav() {
  const categories = [
    { name: "HTML", path: "/html" },
    { name: "CSS", path: "/css" },
    { name: "JavaScript", path: "/javascript" },
    { name: "React", path: "/react" },
    { name: "Sanity and headless CMS", path: "/sanity" },
  ];

  return (
    <ul id="categoryList">
      {categories.map((category, index) => (
        <li key={index} className="navlist">
          <NavLink
            to={category.path}
            className={({ isActive }) => (isActive ? "aktiv" : "")} //.aktiv kan nå brukes for å modifisere listeelementet som er "aktivt"
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
