import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import BannerProduct from "../../components/BannerProduct";

export default function Home({ history }) {
  return (
    <>
      <Header />
      <Container>
        <BannerProduct history={history} />
      </Container>
    </>
  );
}
