import { Alert, Button, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateAuth } from "../Redux/Authslice";

const Login = ({ auth }) => {
  const [apiStatus, setApiStatus] = useState("init");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogin = async (logindata) => {
    setApiStatus("pending");
    const { success } = await auth.loginUser(logindata);
    if (success) {
      dispatch(updateAuth(true));
      navigate("/home");
    }
    setApiStatus("error");
  };
  return (
    <div className="form">
      {apiStatus === "success" && (
        <Alert
          closable
          message="Signup successful you can Login"
          showIcon
          type="success"
        />
      )}
      {apiStatus === "error" && (
        <Alert closable message="Signup failed !" type="error" showIcon />
      )}
      <h2>Login Here</h2>
      <Form layout="vertical" onFinish={submitLogin}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "enter valid email" }]}
        >
          <Input placeholder="enter your mail" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "enter correct password" }]}
        >
          <Input.Password placeholder="password"></Input.Password>
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          block
          loading={apiStatus === "pending"}
        >
          Login
        </Button>
        <b>
          New user create account ?
          <Link to="/signup" className="link">
            signup here
          </Link>
        </b>
      </Form>
    </div>
  );
};

export default Login;
