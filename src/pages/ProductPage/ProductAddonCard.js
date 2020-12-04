import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "../../components/common/Image";

const AddonBlock = styled.div`
  display: flex;
  overflow: auto;
  align-items: center;
  width: 80%;
  border-right: 1px solid lightgray;
`;

const PaymentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-left: 12px;
`;

const ProductAddonCard = ({ product }) => {
  const [totalPrice, setTotalPrice] = useState(product.price);
  const savedPrice = 20;
  const addonProducts = [
    {
      title: "水立方鎧甲發光3A快充",
      spec: "123123",
      price: 123,
    },
    {
      title: "數顯極速",
      spec: "ba4365346r",
      price: 432,
    },
    {
      title: "foo",
      spec: "463575647",
      price: 23,
    },
    {
      title: "32432543",
      spec: "esrgsergres",
      price: 657,
    },
    {
      title: "foo",
      spec: "bar",
      price: 435,
    },
  ];
  return (
    <Card bordered>
      <div className="flex">
        <AddonBlock>
          <div className="mr-2">
            <AddonItem
              title={product.title}
              spec={product.spec}
              price={product.price}
              defaultChecked
            ></AddonItem>
          </div>
          <div className="mr-2">
            <PlusOutlined />
          </div>
          {addonProducts.map((addonProduct, index) => {
            return (
              <div className="mr-2" key={index}>
                <AddonItem
                  title={addonProduct.title}
                  spec={addonProduct.spec}
                  price={addonProduct.price}
                  onChecked={(checked) =>
                    setTotalPrice((price) =>
                      checked
                        ? price + addonProduct.price
                        : price - addonProduct.price
                    )
                  }
                ></AddonItem>
              </div>
            );
          })}
        </AddonBlock>
        <PaymentBlock>
          <div>小計：{totalPrice}</div>
          <div>省下：{savedPrice}</div>
          <Button type="primary">加入購物車</Button>
        </PaymentBlock>
      </div>
    </Card>
  );
};

const StyledAddonItem = styled.div`
  min-width: 160px;
  .title {
    font-size: 0.875rem;
  }
  .price {
    color: red;
  }
`;
const AddonItem = ({ title, spec, price, defaultChecked, onChecked }) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <StyledAddonItem>
      <Image
        height={160}
        url="https://images.unsplash.com/photo-1606847993410-27c7ba6beeb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3267&q=80"
      ></Image>
      <div className="title">{title}</div>
      <div className="flex">
        <div className="mr-1">
          <Checkbox
            disabled={defaultChecked}
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
              // call function
              onChecked(e.target.checked);
            }}
          ></Checkbox>
        </div>
        <div>{spec}</div>
      </div>
      <div className="price">${price}</div>
    </StyledAddonItem>
  );
};

export default ProductAddonCard;
