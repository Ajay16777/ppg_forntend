import React from "react";
import "./index.css";
import { Spinner } from "reactstrap";

const Loader = ({ show }) => {
  return (
    <>
      {show && (
        <div className="loader">
          <Spinner color="light" />
        </div>
      )}
    </>
  );
};
export default Loader;
