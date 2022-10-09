/* eslint-disable react/prop-types */
import React from "react";
import Typography from "./Typography";

const RoundButton = (props) => {
  const { children, color, width, margin, onClick, disabled, height, id } = props;
  const id2 = id + "1";

  return (
    <>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width,
          height: height ? height : "57",
          backgroundColor: color,
          border: "none",
          borderRadius: "70px",
          margin,
        }}
        onClick={onClick}
        disabled={disabled ? disabled : null}
      >
        <Typography type="button" id={id2}>
          {children}
        </Typography>
      </button>
    </>
  );
};

export default RoundButton;
