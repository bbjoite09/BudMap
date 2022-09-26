import React from "react";

const Typography = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, type, margin } = props;
  const title = { fontWeight: "700", fontSize: "36px", lineHeight: "42px", whiteSpace: "pre-wrap", margin: margin };
  const basicStyle = {
    fontWeight: "700",
    fontSize: "15.5px",
    lineHeight: "24px",
    whiteSpace: "pre-wrap",
    margin: margin,
  };
  const button = {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "24.5px",
    whiteSpace: "pre-wrap",
    color: "white",

    margin: margin,
  };

  if (type == "title") {
    return <text style={title}>{children}</text>;
  } else if (type == "button") {
    return <text style={button}>{children}</text>;
  } else {
    return <text style={basicStyle}>{children}</text>;
  }
};

export default Typography;
