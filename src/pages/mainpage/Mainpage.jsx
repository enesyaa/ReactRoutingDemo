import React from "react";
import "./mainpage.css";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Content from "../../components/content/content";

export default function Mainpage() {
  return (
    <div className="mainpage">
      <Content />
      <Sidemenu />
    </div>
  );
}
