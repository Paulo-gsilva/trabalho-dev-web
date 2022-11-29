import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePage from "./components/CoursePage/CoursePage";
import Home from "./components/Home/Home";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={baseUrl}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cursos" element={<CoursePage />}></Route>
      <Route path="/perfil" element={<ProfilePage />}></Route>
    </Routes>
  </BrowserRouter>
);
