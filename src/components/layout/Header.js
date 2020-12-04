import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import Logo from "../../images/logo.png";
import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  padding: 16px 0;
`;

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navigator = styled.div`
  a {
    margin: 0px 4px;
    color: white;
    text-decoration: none;
  }
`;
const Toolbar = styled.div`
  a {
    margin: 0px 6px;
    color: white;
    text-decoration: none;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Header = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <Container>
        <StyledHeaderSection>
          <Navigator>
            <a href="#!">蝦皮購物</a>
            <a href="#!">下載</a>
            <a href="#!">追蹤我們</a>
            <a href="#!">部落格</a>
          </Navigator>
          <Toolbar>
            <a href="#!">通知</a>
            <a href="#!">幫助中心</a>
            <a href="#!">帳號</a>
          </Toolbar>
        </StyledHeaderSection>
        <StyledHeaderSection>
          <Link to="/">
            <img src={Logo} alt="logo" style={{ height: "48px" }}></img>
          </Link>
          <Box>
            <Input.Search
              style={{ marginRight: 8 }}
              placeholder="在商城搜尋"
              onSearch={(value) => console.log(value)}
              enterButton
            />
            <Link to="/cart">
              <ShoppingCartOutlined style={{ fontSize: 28, color: "white" }} />
            </Link>
          </Box>
        </StyledHeaderSection>
      </Container>
    </StyledHeader>
  );
};

export default Header;
