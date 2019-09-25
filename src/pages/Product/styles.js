import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;

  form {
    width: 100%;
    margin: 90px 0;
    max-width: 500px;
    display: flex;

    div {
      padding: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(98, 0, 238, 0.8);
      border-radius: 8px;
      width: 100%;
      background: #fff;
      input {
        width: 460px;
        height: 40px;
        border: none;
        padding: 5px 15px;
        background: transparent;
      }
      button {
        height: 40px;
        outline: none;
        width: 40px;
        padding: 5px 10px;
        background: transparent;
        border: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0;
`;
