import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";

const LoginForm = () => {
  const history = useHistory();
  const { login, isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // call login api
    login(username, password).then(({ token, error }) => {
      if (!token) {
        message.error(error);
      }
    });
  };

  useEffect(() => {
    isAuthenticated && history.push("/");
  }, [isAuthenticated]);

  return (
    <div>
      <Input
        className="mb-3"
        size="large"
        placeholder="請輸入帳號"
        prefix={<UserOutlined />}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        className="mb-3"
        type="password"
        size="large"
        placeholder="請輸入密碼"
        prefix={<LockOutlined />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>登入</Button>
    </div>
  );
};

export default LoginForm;
