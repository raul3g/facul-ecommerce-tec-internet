import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import jsonTeste from "../../config/apiFake";

export default function ShowProduct({ id }) {
  const [product, setProduct] = useState({});
  useEffect(() => {
    try {
      //Pegar o produto na api usando o id
      setProduct(jsonTeste[id - 1]);
    } catch (err) {}
  }, [id]);
  return (
    <Container>
      <img src={product.img} alt="" />
      <p> {product.description} </p>
      <p> {product.price} </p>
      
    </Container>
  );
}
