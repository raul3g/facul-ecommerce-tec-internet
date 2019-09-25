import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import { carrinho } from "../../config/apiFake";

import { FaMehBlank, FaCartArrowDown, FaTrashAlt } from "react-icons/fa";
import { Container, Content, Product, Card, Info, RemoveCard } from "./styles";

export default function Cart({ history }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(carrinho);
  }, []);

  const handleRemoveProduct = id => {
    setTimeout(() => {
      setProducts(products.filter(product => product.id !== id));
    }, 500);
  };

  if (products.length === 0) {
    return (
      <>
        <Header history={history} />
        <Container>
          <div className="alert">
            <p>
              <FaMehBlank />
            </p>
            <p>
              <FaCartArrowDown /> Carrinho vazio!!
            </p>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header history={history} />
      <Container>
        {products.length > 0 && (
          <Content>
            {products.map(product => (
              <Card>
                <header>
                  <span onClick={() => handleRemoveProduct(product.id)}>
                    <FaTrashAlt />
                  </span>
                </header>
                <Product>
                  <img src={product.img} alt="" />
                  <Info>
                    <p id="description">{product.description}</p>
                    <p id="price"> R${product.price} </p>
                    <p className=""> Quantidade: {product.count} </p>
                  </Info>
                </Product>
              </Card>
            ))}
            <button type="button">COMPRAR</button>
          </Content>
        )}
      </Container>
    </>
  );
}
