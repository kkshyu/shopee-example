import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../common/Container";
import CVSLogo from "../../images/cvs_logo.png";
import Remark from "../../images/remark.png";
import QRCode from "../../images/qrcode.png";

const StyledFooter = styled.footer`
  background-color: #fbfbfb;
  padding: 40px 0px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 33.33%;
  @media (min-width: 769px) {
    width: 20%;
  }
  a {
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 2px;
  }
`;
const FooterColumnTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 12px;
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Box>
          <FooterColumn>
            <FooterColumnTitle>客服中心</FooterColumnTitle>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>物流合作</FooterColumnTitle>
            <img
              src={CVSLogo}
              alt="csv_logo"
              width="100px"
              style={{ marginBottom: 12 }}
            />
            <FooterColumnTitle>蝦皮24h包裝減量標章</FooterColumnTitle>
            <img
              src={Remark}
              alt="csv_logo"
              width="100px"
              style={{ marginBottom: 12 }}
            />
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>關注我們</FooterColumnTitle>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
            <Link to="#!">幫助中心</Link>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
            <Box>
              <img src={QRCode} alt="qr_code" width="50%" />
              <div>
                <div>AppStore</div>
                <div>GooglePlay</div>
              </div>
            </Box>
          </FooterColumn>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
