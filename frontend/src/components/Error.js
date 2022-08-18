import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="mb-3">404, Not found Page!</div>
      <Link
        to="/"
        style={{ padding: "1rem .7rem", background: "green", color: "white" }}
      >
        Back to home
      </Link>
    </>
  );
};

export default Error;
