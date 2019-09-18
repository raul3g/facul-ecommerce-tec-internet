import React, { useEffect, useState } from "react";

import { Container, Content, Info } from "./styles";
import { login } from "../../services/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = e => {
    try {
      e.preventDefault();
      if (username === "" || password === "") {
        setError("Error");
      } else if (username === "raul" && password === "raul") {
        // login("token");
        console.log("Login...");
      }
    } catch (err) {
      setError("Error");
    }
  };

  return (
    <Container>
      <Content>
        <img
          src="https://png.pngtree.com/element_our/png/20180911/background-material-design-for-lorem-ipsum-logo-png_89719.jpg"
          alt="E-commerce"
        />
        <Info>Seja bem-vindo! ;)</Info>
        {error && <div className="alert">{error}</div>}
        <form onSubmit={e => handleLogin(e)}>
          <input
            onChange={e => setUsername(e.target.value)}
            type="text"
            required
            placeholder="username"
            minLength="4"
            maxLength="20"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            type="text"
            required
            placeholder="password"
            minLength="4"
            maxLength="20"
          />
          <button type="submit">ENTRAR</button>
        </form>
      </Content>
    </Container>
  );
}
