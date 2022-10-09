import React from "react";

const Typography = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, onClick, type, margin, color, position, right, left, top, bottom, fontSize, zIndex, id } = props;
  const title = {
    fontWeight: "700",
    fontSize: "33px",
    lineHeight: "39px",
    whiteSpace: "pre-wrap",
    margin: margin,
    wordSpacing: "-2px",
  };
  const basicStyle = {
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "22px",
    whiteSpace: "pre-wrap",
    wordSpacing: "-2px",
    margin: margin,
    color,
    position,
    right,
    bottom,
    zIndex,
  };
  const quize = {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "22px",
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
    fontWeight: "900",
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
      <p id={id} style={title} onClick={onClick}>
        {children}
      </p>
    );
  } else if (type == "button") {
    return (
      <p id={id} style={button} onClick={onClick}>
        {children}
      </p>
    );
  } else if (type == "speech") {
    return (
      <p id={id} style={speech} onClick={onClick}>
        {children}
      </p>
    );
  } else if (type == "quize") {
    return (
      <p id={id} style={quize} onClick={onClick}>
        {children}
      </p>
    );
  } else {
    return (
      <p id={id} style={basicStyle} onClick={onClick}>
        {children}
      </p>
    );
  }
};

export default Typography;
