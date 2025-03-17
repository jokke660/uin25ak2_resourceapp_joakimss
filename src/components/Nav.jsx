import { NavLink } from "react-router-dom"; //importerer NavLink
import "../styles/Nav.scss";

export default function Nav() {
  const categories = [
    { name: "HTML", path: "/html"},
    { name: "CSS", path: "/css"},
    { name: "JavaScript", path: "/javascript"},
    { name: "React", path: "/react"},
    { name: "Sanity and headless CMS", path: "/sanity"},
  ]; //navigasjon, liste-elementer ^ 

  return (
    <ul id="categoryList">
      {categories.map((category, index) => (
        <NavLink
          key={index}
          to={category.path}
          className={({ isActive }) => `navlist ${isActive ? "aktiv" : ""}`} //.aktiv kan nå brukes for å modifisere listeelementenes utseende når de er "aktiv"
        >
          <li>
            {category.name}
          </li>
        </NavLink>
      ))}
    </ul>
  );
}
