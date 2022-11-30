import React from "react";
import "../profile.css";
import manprofile from "../../../img/manprofile.jpg";
import womanprofile from "../../../img/womanprofile.png";

function Profile({
  name,
  email,
  city,
  educationalLevel,
  img,
  alt,
  isTeacher,
  gender,
}) {
  return (
    <section className="profile-section">
      <h2 className="profile-title">
        Olá, {name}, {gender == "M" ? "Bem-Vindo" : "Bem-Vinda"} ao seu perfil.
      </h2>
      <div className="profile-content">
        <img src={gender == "M" ? manprofile : womanprofile} alt={alt}></img>
        <div className="profile-data">
          <div>
            <label>Nome: </label>
            <input value={name} readOnly disabled />
          </div>
          <div>
            <label>Email: </label>
            <input value={email} readOnly disabled />
          </div>
          <div>
            <label>Cidade: </label>
            <input value={city} readOnly disabled />
          </div>
          <div>
            <label>Grau: </label>
            <input value={educationalLevel} readOnly disabled />
          </div>
          {isTeacher ? (
            <div className="teacher-button">
              <button>Postar aula</button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;
