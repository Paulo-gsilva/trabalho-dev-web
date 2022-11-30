import React from "react";
import { NavMenu } from "../NavMenu";
import Profile from "./Profile/Profile";
import Footer from "../Footer/Footer";

function ProfilePage() {
  return (
    <>
      <NavMenu />
      <Profile
        alt="foto de perfil"
        name="Paulo Guilherme"
        email="paulo@gmail.com"
        city="Russas"
        educationalLevel="Segundo Grau"
        isTeacher={false}
        gender="M"
      />
      <Footer style="footer-section-profile" />
    </>
  );
}

export default ProfilePage;
