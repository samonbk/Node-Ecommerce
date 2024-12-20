import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ children, name }) => {
  return (
    <>
      <Link to={`/product/${name}`}>{children}</Link>
    </>
  );
};

export default CardLink;
