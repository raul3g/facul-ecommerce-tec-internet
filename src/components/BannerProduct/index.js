import React from "react";

import { Container, Content } from "./styles";
import jsonTeste from "../../config/apiFake";
import { Link } from "react-router-dom";

import Card from "../Card";

export default function BannerProduct({ history }) {
  return (
    <Container>
      <Content>
        {jsonTeste &&
          jsonTeste.map(product => (
            <Card key={product.id} product={product} history={history} />
          ))}
      </Content>

      <Link id="vermais" to="/">
        Ver Mais...
      </Link>
    </Container>
  );
}
