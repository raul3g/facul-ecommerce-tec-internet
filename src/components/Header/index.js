import React from "react";

// import { Container } from './styles';

export default function Header() {
  return (
    <nav
      id="menu"
      class="navbar navbar-expand-lg navbar-dark bg-dark static-top"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          E-commerce
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Inicio
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/product">
                Produto
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Carrinho
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
