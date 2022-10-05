/* eslint-disable react/prop-types */
import React from "react";
import Typography from "./Typography";

const RoundButton = (props) => {
  const { children, color, width, margin, onClick, disabled } = props;

  return (
    <>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width,
          height: "56px",
          backgroundColor: color,
          border: "none",
          borderRadius: "30px",
          margin,
        }}
        onClick={onClick}
        disabled={disabled ? disabled : null}
      >
        <Typography type="button">{children}</Typography>
      </button>
    </>
  );
};

export default RoundButton;
