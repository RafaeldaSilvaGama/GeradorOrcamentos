import { useState } from "react";
import "../../styles/styles.css";
import { LayoutComponent } from "../../components/Layouts";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LayoutComponent>
      <form action="" className="login-form">
        <span className="login-form-title">Bem Vindo!</span>
        <div className="wrap-input">
          <input
            type="email"
            className={email !== "" ? "has-val input" : "input"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input">
          <input
            type="password"
            className={password !== "" ? "has-val input" : "input"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>
        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>
        <div className="text-center">
          <span className="text1">Não possui conta?</span>
          <a className="text2" href="">
            Criar conta.
          </a>
        </div>
      </form>
    </LayoutComponent>
  );
}

export default Login;
