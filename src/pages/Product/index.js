import React, { useState } from "react";

import { Container, Content, Error } from "./styles";
import Header from "../../components/Header";

import { FaSearch } from "react-icons/fa";
import Card from "../../components/Card";
import ShowProduct from "../../components/ShowProduct";

import jsonTeste from "../../config/apiFake";
import Spinner from "../../assets/Spin-1s-200px.svg";

export default function Product({ history, match }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    setError("");
    setProducts([]);

    const filterProduct = jsonTeste.filter(product =>
      product.description
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );

    setSpiner(true);
    setTimeout(() => {
      setSpiner(false);
      if (filterProduct.length !== 0) {
        setProducts(filterProduct);
      } else {
        setError("Nenhum resultado encontrado!");
      }
    }, 1000);
  };

  if (match.params.id) {
    return (
      <>
        <Header history={history} />
        <ShowProduct id={match.params.id} history={history} />
      </>
    );
  }
  return (
    <>
      <Header history={history} />
      <Container>
        <form onSubmit={e => handleSearch(e)}>
          <div>
            <input
              type="text"
              value={search}
              placeholder="Pesquise alguma coisa..."
              required
              onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">
              <FaSearch color="rgba(98, 0, 238, 0.8)" size={17} />
            </button>
          </div>
        </form>
      </Container>
      {error && <Error className="alert">{error} </Error>}
      {products && (
        <Content key={products.id}>
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
