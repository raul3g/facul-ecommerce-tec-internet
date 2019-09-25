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
    #menu{
      background: linear-gradient(rgba(98, 0, 238, 0.8), rgba(49, 27, 146, 0.8)) !important;
    }
  }

  html, body, #root{
    height: 100%;
  }


`;
