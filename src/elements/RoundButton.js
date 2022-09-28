/* eslint-disable react/prop-types */
import React from "react";
import Typography from "./Typography";

const RoundButton = (props) => {
  const { children, color, width, margin, onClick } = props;

  return (
    <>
      <button
        style={{
          width,
          height: "56px",
          backgroundColor: color,
          border: "none",
          borderRadius: "30px",
          margin,
        }}
        onClick={onClick}
      >
        <Typography type="button">{children}</Typography>
      </button>
    </>
  );
};

export default RoundButton;
