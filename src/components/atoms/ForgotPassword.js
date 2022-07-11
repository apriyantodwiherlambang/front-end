import React from "react";
import { Row, Col, Form } from "react-bootstrap";

function ForgotPassword(props) {
  return (
    <>
    <Row>
    <div className="w-100 d-flex justify-content-center align-items-center">
        <p>
        Forgot Password?
        </p>
    </div>
    <div className="w-100 d-flex justify-content-center align-items-center">
        <span className="alternative">
        Don't have an account?
        <p>
            Sign Up
        </p>
        </span>
    </div>
    </Row>
    </>
  );
}

export default ForgotPassword;