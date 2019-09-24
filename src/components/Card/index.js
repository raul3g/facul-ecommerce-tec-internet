import React, { useEffect, useState } from "react";

import { Container } from "./styles";

export default function Card({ product, history }) {
  const handleComprar = () => {
    history.push(`/product/${product.id}`);
  };
  return (
    <Container onClick={handleComprar}>
      <header>R$ {product.price}</header>
      <img src={product.img} alt="" />
      <p>{product.description}</p>
    </Container>
  );
}
