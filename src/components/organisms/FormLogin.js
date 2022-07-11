import React from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

function Login() {
  const [isError, setIsError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsError(false);

        // SET TOKEN
        localStorage.setItem("token", res?.data);
        window.location.href = "/";
      })
      .catch((err) => {
        setIsError(true);
        setErrorMsg(err?.response?.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
   
      <div class="container-fluid ps-md-0">
      <div class="row g-0">
      <div class=" col-md-4 col-lg-6 bg-image"></div>
      <div class="col-md-8 col-lg-6">
      <div class="login d-flex align-items-center py-5">
      <div class="container">
      <div className="d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-8 mx-auto">
        {isError ? <Alert variant="danger">{errorMsg}</Alert> : null}
        <h3 class="login-heading mb-3">WELCOME</h3>
        <p class="login-description mb-3">
          Log in into your exiting account
        </p>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="form-floating mb-3" controlId="formBasicEmail">
            
            <Form.Control
              id="formBasicEmail"
              type="email"
              placeholder="examplexxx@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          onChange={(e) => setEmail(e.target.value)}
          />
          
          </Form.Group>

          <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="form-floating mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to terms & conditions" />
          </Form.Group>
          <div class="d-grid">
          <Button
            class="btn btn-login text-uppercase fw-bold mb-2"
            variant="primary"
            type="submit"
            disabled={isLoading}
            onClick={handleLogin}
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
          <div class="text-right">
            <a class="small" href="#">
              Forgot password?
            </a>
          </div>
          <p class="border-bg-2 mb-3"></p>
            <div class="text-center">
              Don’t have an account?
              <a class="small" href="#">
                Sign Up
              </a>
          </div>
          </div>
        </Form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

  );
}

export default Login;