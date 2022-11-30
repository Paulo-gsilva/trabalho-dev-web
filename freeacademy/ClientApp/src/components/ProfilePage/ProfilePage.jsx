import React from "react";
import { NavMenu } from "../NavMenu";
import Profile from "./Profile/Profile";
import image from "../../img/bible-g38657752f_1920.jpg";

function ProfilePage() {
  return (
    <>
      <NavMenu />
      <Profile
        img={image}
        alt="foto de perfil"
        name="Paulo Guilherme"
        email="paulo@gmail.com"
        city="Russas"
        educationalLevel="Segundo Grau"
        isTeacher="true"
      />
    </>
  );
}

export default ProfilePage;
