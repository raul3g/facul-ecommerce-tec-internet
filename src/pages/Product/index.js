import React, { useState, useEffect } from "react";

import { Container, Content } from "./styles";
import Header from "../../components/Header";

import { FaSearch, FaSpinner } from "react-icons/fa";
import Card from "../../components/Card";
import ShowProduct from "../../components/ShowProduct";

import jsonTeste from "../../config/apiFake";
import Spinner from "../../assets/Spin-1s-200px.svg";

export default function Product({ history, match }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [spiner, setSpiner] = useState(false);

  const handleSearch = e => {
    e.preventDefault();
    setProducts(jsonTeste);
    setSpiner(true);
    setTimeout(() => {
      setSpiner(false);
    }, 1000);
  };

  if (match.params.id) {
    return (
      <>
        <Header />
        <ShowProduct id={match.params.id} />
      </>
    );
  }
  return (
    <>
      <Header />
      <Container>
        <form onSubmit={e => handleSearch(e)}>
          <div>
            <input
              type="text"
              value={search}
              placeholder="Pesquise alguma coisa..."
              onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">
              <FaSearch color="rgba(98, 0, 238, 0.8)" size={17} />
            </button>
          </div>
        </form>
      </Container>
      {products && (
        <Content>
          {spiner === false &&
            products.map(product => (
              <Card product={product} history={history} />
            ))}
          {spiner && <img src={Spinner} />}
        </Content>
      )}
    </>
  );
}
