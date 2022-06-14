import React from "react";
import "./Loader1.css";

function Loader1({ scale = 90, borderWidth = 5, borderColor = "#109ad7" }) {
  return (
    <div className="loadingio-spinner-rolling">
      <div
        className="ldio"
        style={{
          width: scale,
          height: scale,
        }}
      >
        <div
          style={{
            borderWidth,
            borderColor,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Loader1;
