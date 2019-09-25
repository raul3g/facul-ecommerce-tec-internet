import React, { useState, useEffect } from "react";

import { Container, Content, Info, FormProduct, Cep } from "./styles";
import jsonTeste from "../../config/apiFake";

export default function ShowProduct({ id, history }) {
  const [product, setProduct] = useState({});
  const [caunt, setCaunt] = useState(1);
  useEffect(() => {
    try {
      //Pegar o produto na api usando o id
      setProduct(jsonTeste[id - 1]);
    } catch (err) {}
  }, [id]);

  const handleComprar = e => {
    e.preventDefault();
    const newProduct = { ...product, caunt };
    history.push("/cart");
    console.log(newProduct);
  };

  return (
    <Container>
      <Content>
        <img src={product.img} alt="" />
        <Info>
          <p id="description">{product.description}</p>
          <p id="price"> R${product.price} </p>
          <FormProduct>
            <form onSubmit={e => handleComprar(e)}>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={caunt}
                onChange={e => setCaunt(parseInt(e.target.value))}
                placeholder="Quantidade"
                required
              />

              <button type="submit"> Adicionar ao carrinho </button>
            </form>
          </FormProduct>
        </Info>
      </Content>
    </Container>
  );
}
