import { Carousel } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ClearFix from "../components/common/ClearFix";
import DefaultLayout from "../components/layout/DefaultLayout";
import ProductCard from "../components/product/ProductCard";
import Banner1 from "../images/banner/banner1.jpg";
import Banner2 from "../images/banner/banner2.jpg";
import Banner3 from "../images/banner/banner3.jpg";

const BannerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;
const BannerCarouselContainer = styled.div`
  width: 100%;
  padding: 1px;
  @media (min-width: 769px) {
    width: 66.67%;
  }
`;
const BannerSectionContainer = styled.div`
  width: 100%;
  padding: 1px;
  @media (min-width: 769px) {
    width: 33.33%;
  }
`;
const BannerFeatureContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;
const BannerFeatureColumn = styled.div`
  width: 33.33%;
  text-align: center;
`;
const BannerContainer = styled.div`
  width: 100%;
  padding: 1px;
`;
const CustomerContainer = styled.div`
  margin-bottom: 48px;
`;
const ProductCollectionContainer = styled.div`
  margin: 0 -4px 48px -4px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const ProductContainer = styled.div`
  padding: 4px;
  width: 100%;
  @media (min-width: 577px) {
    width: 50%;
  }
  @media (min-width: 769px) {
    width: 20%;
  }
`;
const Image = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-size: cover;
`;

const HomePage = () => {
  return (
    <DefaultLayout fixedHeader>
      <ClearFix />
      <BannerBox>
        <BannerCarouselContainer>
          <Carousel autoplay>
            <Link to="/p001">
              <Image height={200} url={Banner1}></Image>
            </Link>
            <Link to="/p002">
              <Image height={200} url={Banner2}></Image>
            </Link>
            <Link to="/p003">
              <Image height={200} url={Banner3}></Image>
            </Link>
          </Carousel>
        </BannerCarouselContainer>
        <BannerSectionContainer>
          <BannerContainer>
            <Link to="p004">
              <Image height={100} url={Banner1}></Image>
            </Link>
          </BannerContainer>
          <BannerContainer>
            <Link to="p004">
              <Image height={100} url={Banner2}></Image>
            </Link>
          </BannerContainer>
        </BannerSectionContainer>
        <BannerFeatureContainer>
          <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
          <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
          <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
        </BannerFeatureContainer>
      </BannerBox>
      <CustomerContainer>
        <Link to="/advertising">
          <Image height={100} url={Banner1} />
        </Link>
      </CustomerContainer>
      <ProductCollectionContainer>
        <ProductContainer>
          <Link to="/p001">
            <ProductCard
              title="foo"
              coverUrl={Banner1}
              salePrices={[100, 200]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
        <ProductContainer>
          <Link to="/p002">
            <ProductCard
              title="banner2"
              coverUrl={Banner2}
              salePrices={[100, 200]}
              listPrices={[200, 299]}
            />
          </Link>
        </ProductContainer>
      </ProductCollectionContainer>
    </DefaultLayout>
  );
};

export default HomePage;
