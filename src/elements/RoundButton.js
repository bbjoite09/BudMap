/* eslint-disable react/prop-types */
import React from "react";
import Typography from "./Typography";

const RoundButton = (props) => {
  const { children, color, width, margin } = props;

  return (
    <>
      <button
        style={{
          width,
          height: "10%",
          backgroundColor: color,
          border: "none",
          borderRadius: "30px",
          margin,
        }}
      >
        <Typography type="button">{children}</Typography>
      </button>
    </>
  );
};

export default RoundButton;
