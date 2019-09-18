import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root{
    height: 100%;
  }


`;
