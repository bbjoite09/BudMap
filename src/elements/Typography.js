import React from "react";

const Typography = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, onClick, type, margin, color, position, right, left, top, bottom, fontSize, zIndex } = props;
  const title = {
    fontWeight: "700",
    fontSize: "34px",
    lineHeight: "42px",
    whiteSpace: "pre-wrap",
    margin: margin,
    wordSpacing: "-2px",
  };
  const basicStyle = {
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "24px",
    whiteSpace: "pre-wrap",
    wordSpacing: "-2px",
    margin: margin,
    color,
    position,
    right,
    bottom,
    zIndex,
  };
  const button = {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "24.5px",
    whiteSpace: "pre-wrap",
    color: "white",
    margin: margin,
  };
  const speech = {
    fontWeight: "900",
    fontSize: fontSize ? fontSize : "20px",
    lineHeight: "34px",
    wordBreak: "keep-all",
    color,
    position,
    right,
    bottom,
    left,
    top,
    zIndex,
  };

  if (type == "title") {
    return (
      <p style={title} onClick={onClick}>
        {children}
      </p>
    );
  } else if (type == "button") {
    return (
      <p style={button} onClick={onClick}>
        {children}
      </p>
    );
  } else if (type == "speech") {
    return (
      <p style={speech} onClick={onClick}>
        {children}
      </p>
    );
  } else {
    return (
      <p style={basicStyle} onClick={onClick}>
        {children}
      </p>
    );
  }
};

export default Typography;
