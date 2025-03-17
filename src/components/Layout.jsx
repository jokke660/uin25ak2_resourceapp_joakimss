import "../styles/Layout.scss";
import React from "react";
import { Outlet } from "react-router-dom"; //importerer outlet fra routing
import Nav from "./Nav";

export default function Layout() {
  return (
    <div id="contentbackground">
      <Nav />
      <h2>Velg en kategori</h2>
      <div id="mainContent">
        <Outlet />
      </div>
    </div>
  );
}
