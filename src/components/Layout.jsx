import "../styles/Layout.scss";
import { Outlet } from "react-router-dom"; //importerer outlet fra routing. Jeg har lest om bruk av <Outlet/> her: https://www.softpost.org/reactjs/outlet-component-in-react
import Nav from "./Nav";

export default function Layout() {
  return (
    <div id="contentbackground">
      <Nav/>
      <div id="mainContent">
        <Outlet/>
      </div>
    </div>
  );
}
