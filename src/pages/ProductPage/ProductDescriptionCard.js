import { Card } from "antd";
import React from "react";

const ProductDescriptionCard = ({ description }) => {
  return (
    <Card bordered>
      <div className="mb-3 p-3 bg-gray-100">
        <div>商品詳情</div>
      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </Card>
  );
};

export default ProductDescriptionCard;
