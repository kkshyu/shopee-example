import React from "react";
import styled from "styled-components";
import LoginForm from "../components/auth/LoginForm";
import Container from "../components/common/Container";
import DefaultLayout from "../components/layout/DefaultLayout";

const StyledLoginBox = styled.div`
  background-color: white;
`;

const StyledLoginContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 48px 0;
`;

const LoginPage = () => {
  return (
    <DefaultLayout>
      <StyledLoginBox>
        <StyledLoginContainer>
          <div>
            <img
              width="100"
              src="https://images.unsplash.com/photo-1618270352864-fa8550f33446?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1303&q=80"
              alt=""
            />
          </div>
          <LoginForm />
        </StyledLoginContainer>
      </StyledLoginBox>
    </DefaultLayout>
  );
};

export default LoginPage;
