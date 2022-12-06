import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/freeacademyfulllogo.png";
import "./signin.css";

function SignIn() {
  const [teatcher, setTeatcher] = useState(true);
  const isTeatcher = teatcher ? "hidden" : "show";

  function handleClickTeatcher(e) {
    setTeatcher(!teatcher);
  }

  return (
    <section className="signin-section">
      <div className="signin-content">
        <img src={logo} alt="logo free academy"></img>
        <form method="post">
          <input placeholder="Nome" type="text" id="name" />
          <input placeholder="Cidade" type="text" id="city" />
          <select name="escolaridade" id="escolaridade">
            <option value="0">Grau de Ensino</option>
            <option value="Ensino Fundamental">Ensino Fundamental</option>
            <option value="Ensino Medio">Ensino Medio</option>
            <option value="Ensino Superior">Ensino Superior</option>
            <option value="Ensino Fundamental Incompleto">
              Ensino Fundamental Incompleto
            </option>
            <option value="Ensino Medio Incompleto">
              Ensino Medio Incompleto
            </option>
            <option value="Ensino Superior Incompleto">
              Ensino Superior Incompleto
            </option>
          </select>
          <input placeholder="Email" type="email" id="email" />
          <div className="div-password">
            <input placeholder="Senha" type="password" id="password" />
            <input placeholder="Confirmar Senha" type="password" />
          </div>
          <div className="teacherBox">
            <label htmlFor="isTeacher">É professor?</label>
            <input
              type="checkbox"
              id="isTeacher"
              onClick={handleClickTeatcher}
            />
          </div>
          <input placeholder="Matéria" type="text" className={isTeatcher} />
          <div className="form-button">
            <button type="submit" className="loginButton">
              <Link to="/login"> Login </Link>
            </button>
            <button type="submit" className="signButton">
              <Link to="/"> Cadastrar</Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
