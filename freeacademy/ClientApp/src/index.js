import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePage from "./components/CoursePage/CoursePage";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import SignIn from "./components/SignIn/Signin";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={baseUrl}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cursos" element={<CoursePage isTeacher={true} />}></Route>
      <Route path="/perfil" element={<ProfilePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cadastrar" element={<SignIn />}></Route>
    </Routes>
  </BrowserRouter>
);
