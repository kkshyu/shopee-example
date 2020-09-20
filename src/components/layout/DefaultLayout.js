import React from "react";
import Header from "./Header";
import styled, { css } from "styled-components";

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
      {children}
      <footer>This is footer</footer>
    </div>
  );
};

export default DefaultLayout;
