import { Card } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ProductAbstractCard from "./ProductAbstractCard";
import ProductAddonCard from "./ProductAddonCard";
import ProductDescriptionCard from "./ProductDescriptionCard";

const StyledContent = styled.div`
  padding: 32px 0;
`;

const ProductPage = () => {
  const { productName } = useParams();

  const product = {
    name: productName,
    spec: "iphone12",
    listPrices: [100, 200],
    salePrices: [50, 80],
    description:
      '<dd id="Intro0"><div class="intro_box"><span class="tc"><div class="tl"><p><img src="https://a.ecimg.tw/img/projects/personal/v0/upload_file/US00017016/haylou_01.jpg" alt="" width="900" height="12156"></p></div></span></div></dd>',
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
          <ProductAddonCard
            product={{
              title: product.name,
              spec: product.spec,
              price: product.listPrices[0],
            }}
          />
        </div>
        <div className="mb-3">
          <Card bordered>xxx</Card>
        </div>
        <div className="flex">
          <div className="mr-3" style={{ flex: 4 }}>
            <ProductDescriptionCard description={product.description} />
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
