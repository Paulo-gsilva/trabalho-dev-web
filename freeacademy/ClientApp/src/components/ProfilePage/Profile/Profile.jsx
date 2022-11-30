import React from "react";
import "../profile.css";

function Profile({ name, email, city, educationalLevel, img, alt, isTeacher }) {
  return (
    <section className="profile-section">
      <h2 className="profile-title">Olá, {name} bem-vindo(a) ao seu perfil.</h2>
      <div className="profile-content">
        <img src={img} alt={alt}></img>
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
            <div>a</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profile;
