import React from "react";
import Header from "./Header";
import styled, { css } from "styled-components";
import Footer from "./Footer";
import Container from "../common/Container";

const PageHeader = styled.div`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
    `}
`;

const DefaultLayout = ({ fixedHeader, children }) => {
  return (
    <div>
      <PageHeader fixed={fixedHeader}>
        <Header />
      </PageHeader>
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
