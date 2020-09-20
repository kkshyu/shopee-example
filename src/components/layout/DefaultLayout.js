import React from "react";
import Header from "./Header";
import styled, { css } from "styled-components";
import Footer from "./Footer";
import Container from "../common/Container";

const PageHeader = styled(Header)`
  ${(props) =>
    props.fixed &&
    css`
      z-index: 1;
      position: fixed;
    `}
`;

const DefaultLayout = ({ fixedHeader, children }) => {
  return (
    <div>
      <PageHeader fixed={fixedHeader} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
