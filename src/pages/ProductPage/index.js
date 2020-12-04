import { Card } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ProductAbstractCard from "./ProductAbstractCard";
import ProductAddonCard from "./ProductAddonCard";

const StyledContent = styled.div`
  padding: 32px 0;
`;

const ProductPage = () => {
  const { productName } = useParams();

  const product = {
    name: productName,
    listPrices: [100, 200],
    salePrices: [50, 80],
  };

  return (
    <DefaultLayout>
      <StyledContent>
        <div className="mb-3">
          <ProductAbstractCard
            title={product.name}
            listPrices={product.listPrices}
            salePrices={product.salePrices}
          />
        </div>
        <div className="mb-3">
          <ProductAddonCard product={{
              title: '手機殼',
              spec: 'iphone12',
              price: 12
          }} />
        </div>
        <div className="mb-3">
          <Card bordered>xxx</Card>
        </div>
        <div className="flex">
          <div className="mr-3" style={{ flex: 4 }}>
            <Card bordered>xxx</Card>
          </div>
          <Card bordered style={{ flex: 1 }}>
            xxx
          </Card>
        </div>
      </StyledContent>
    </DefaultLayout>
  );
};

export default ProductPage;
