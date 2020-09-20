import { Card } from "antd";
import React from "react";
import styled from "styled-components";

const SquareImage = styled.div`
  padding-top: 100%;
  background-position: center;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;
const ListPriceLabel = styled.span`
  color: #757575;
  text-decoration-line: line-through;
  margin-right: 4px;
`;
const SalePriceLabel = styled.span`
  color: #ee4c2d;
`;
const ProductCard = ({
  coverUrl,
  title,
  listPrices,
  salePrices,
  discountPercentage,
  salesNumber,
  rating,
  isLiked,
}) => {
  return (
    <Card hoverable cover={<SquareImage src={coverUrl} />}>
      <Card.Meta
        title={title}
        description={
          <div>
            {listPrices && listPrices.length > 0 && (
              <ListPriceLabel>${listPrices[0]}</ListPriceLabel>
            )}
            {salePrices && salePrices.length > 0 && (
              <SalePriceLabel>${salePrices[0]}</SalePriceLabel>
            )}
          </div>
        }
      />
    </Card>
  );
};

export default ProductCard;
