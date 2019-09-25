import React from "react";

// import { Container } from './styles';
import styled from "styled-components";
import {
  FaHome,
  FaProductHunt,
  FaCartArrowDown,
  FaSignInAlt
} from "react-icons/fa";

import { logout } from "../../services/auth";
const Sign = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default function Header({ history }) {
  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-dark bg-dark static-top"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          E-commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <FaHome /> Inicio
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product">
                <FaProductHunt /> Produto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <FaCartArrowDown /> Carrinho
              </a>
            </li>
            <li className="nav-item">
              <Sign className="nav-link" onClick={handleLogout}>
                <FaSignInAlt /> Sair
              </Sign>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
