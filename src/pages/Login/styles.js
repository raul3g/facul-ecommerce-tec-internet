import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(98, 0, 238, 0.8), rgba(49, 27, 146, 0.8));
  padding: 0 10px;
  .alert {
    padding: 15px;
    display: flex;
    transition: 0.5s ease;
    background: rgba(255, 0, 0, 0.7);
    border: 1px solid rgba(255, 0, 0, 0.8);
    border-radius: 8px;
    align-self: stretch;
    text-align: center;
    color: #ffff;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  flex-direction: column;

  width: 100%;
  max-width: 400px;
  background: #ffff;
  border: 1px solid #ffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    width: 150px;
    height: auto;
  }
  form {
    display: flex;
    align-self: stretch;
    flex-direction: column;

    input {
      height: 40px;
      background: transparent;
      margin: 5px 0;
      padding: 5px 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      :focus {
        border-color: rgba(98, 0, 238, 0.8);
        transition: 0.3s ease-in;
      }
    }
    button {
      height: 40px;
      margin: 10px 0 0 0;
      background: linear-gradient(
        rgba(98, 0, 238, 0.8),
        rgba(49, 27, 146, 0.8)
      );
      border-radius: 5px;
      border: none;
      color: #fff;
      padding: 5px 15px;
      cursor: pointer;
      transition: 0.3s ease-in;
      :hover {
        opacity: 0.8;
        transition: 0.5s ease-in;
      }
    }
  }
`;
export const Info = styled.div`
  font-size: 17px;
  margin: 10px 0;
`;
