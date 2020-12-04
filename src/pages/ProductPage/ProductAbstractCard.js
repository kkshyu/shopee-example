import { Button, Card, Tag } from "antd";
import React from "react";
import styled from "styled-components";

const StyledPriceSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  padding: 15px 20px;
`;
const SalePriceLabel = styled.span`
  color: #d0011b;
  font-size: 1.875rem;
`;

const ProductAbstractCard = ({ title, listPrices, salePrices }) => {
  return (
    <Card bordered>
      <div className="flex">
        <div className="mr-3" style={{ flex: 2 }}>
          <img
            className="mb-3"
            src="https://images.unsplash.com/photo-1606895125340-0b56a65d52ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt=""
          />
        </div>
        <div style={{ flex: 3 }}>
          <h1>{title}</h1>
          <div className="flex mb-3">
            <div className="mr-2">4.9 stars</div>
            <div className="mr-2">評價</div>
            <div>數量</div>
          </div>
          <StyledPriceSection className="mb-3">
            <span className="mr-1">
              {listPrices[0]} - {listPrices[1]}
            </span>
            <SalePriceLabel>
              {salePrices[0]} - {salePrices[1]}
            </SalePriceLabel>
          </StyledPriceSection>
          <div className="flex">
            <div style={{ flex: 1 }}>賣場折價券</div>
            <div style={{ flex: 4 }}>
              <Tag color="magenta">現折19</Tag>
              <Tag color="magenta">現折39</Tag>
            </div>
          </div>
          <div className="flex">
            <div style={{ flex: 1 }}>賣場折價券</div>
            <div style={{ flex: 4 }}>
              <Tag color="magenta">現折19</Tag>
              <Tag color="magenta">現折39</Tag>
            </div>
          </div>
          <div className="flex">
            <div style={{ flex: 1 }}>賣場折價券</div>
            <div style={{ flex: 4 }}>
              <Tag color="magenta">現折19</Tag>
              <Tag color="magenta">現折39</Tag>
            </div>
          </div>
          <div className="flex">
            <div style={{ flex: 1 }}>賣場折價券</div>
            <div style={{ flex: 4 }}>
              <Tag color="magenta">現折19</Tag>
              <Tag color="magenta">現折39</Tag>
            </div>
          </div>
          <div className="flex">
            <div style={{ flex: 1 }}>賣場折價券</div>
            <div style={{ flex: 4 }}>
              <Tag color="magenta">現折19</Tag>
              <Tag color="magenta">現折39</Tag>
            </div>
          </div>
          <div className="flex">
            <div style={{ flex: 1 }}>賣場折價券</div>
            <div style={{ flex: 4 }}>
              <Tag color="magenta">現折19</Tag>
              <Tag color="magenta">現折39</Tag>
            </div>
          </div>
          <div className="flex">
            <Button className="mr-3">加入購物車</Button>
            <Button>立即購買</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductAbstractCard;
