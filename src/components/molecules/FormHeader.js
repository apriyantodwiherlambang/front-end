import React from "react";
import PropTypes from "prop-types";

function FormHeader(props) {
  const { title, desc } = props;
  return (
    <>
      <h5 className="WELCOME">{title}</h5>
      <p className="Log in into your exiting account">{desc}</p>
      <hr />
    </>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

FormHeader.defaultProps = {
  title: "WELCOME",
  desc: "Log in into your exiting account",
};

export default FormHeader;