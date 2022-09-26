import React from "react";

const Typography = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, type } = props;

  if (type == "title") {
    return <text style={title}>{children}</text>;
  } else {
    return <text style={basicStyle}>{children}</text>;
  }
};

const title = { fontWeight: "700", fontSize: "36px", lineHeight: "42px" };
const basicStyle = { fontWeight: "700", fontSize: "15.5px", lineHeight: "24px" };

export default Typography;
