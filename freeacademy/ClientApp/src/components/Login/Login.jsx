import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import logo from "../../img/freeacademyfulllogo.png";

function Login() {
  return (
    <section className="login-section">
      <div className="login-content">
        <img src={logo} alt="logo free academy"></img>
        <form method="post">
          <input placeholder="Email" type="email" />
          <input placeholder="Senha" type="password" />
          <div className="form-button">
            <button type="submit" className="loginButton">
              Login
            </button>
            <button className="signButton">
              <Link to="/cadastrar"> Cadastrar</Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
