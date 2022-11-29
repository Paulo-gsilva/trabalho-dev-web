import React, { Component } from "react";
import Home from "./components/Home/Home";
import { NavMenu } from "./components/NavMenu";
import "./custom.css";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
    </>
  );
}

export default App;
