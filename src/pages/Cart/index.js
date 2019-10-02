import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import { carrinho } from "../../config/apiFake";

import { FaMehBlank, FaCartArrowDown, FaTrashAlt } from "react-icons/fa";
import { Container, Content, Product, Card, Info } from "./styles";

export default function Cart({ history }) {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setProducts(carrinho);
  }, []);

  useEffect(() => {
    setPrice(
      products.reduce((acc, cv) => {
        return acc + cv.price * cv.count;
      }, 0)
    );
  }, [products]);

  const handleRemoveProduct = id => {
    setTimeout(() => {
      setProducts(products.filter(product => product.id !== id));
    }, 500);
  };

  const handleComprar = () => {
    setProducts([]);
  };

  if (products.length === 0) {
    return (
      <>
        <Header history={history} />
        <Container style={{ height: 500 }}>
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
              <Card key={product.id}>
                <header>
                  <span onClick={() => handleRemoveProduct(product.id)}>
                    <FaTrashAlt />
                  </span>
                </header>
                <Product>
                  <img src={product.img} alt="" />
                  <Info>
                    <p id="description">{product.description}</p>
                    <p className="price"> R${product.price} </p>
                    <p className=""> Quantidade: {product.count} </p>
                  </Info>
                </Product>
              </Card>
            ))}
            <div className="price">{`Total: R$${price}`}</div>
            <button type="button" onClick={handleComprar}>
              COMPRAR
            </button>
          </Content>
        )}
      </Container>
    </>
  );
}
