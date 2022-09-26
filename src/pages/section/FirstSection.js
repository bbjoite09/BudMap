import React from "react";
import sectionBackground from "../../static/images/section/section1.png";
import { string } from "../../static/strings/string";
import Chat from "../home/Chat";

const FirstSection = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#83C4D6",
        position: "relative",
      }}
    >
      <img src={sectionBackground} style={{ position: "absolute", width: "100%", height: "85%", top: "10%" }} />
      <Chat>{string.clickIcon[0]}</Chat>
    </div>
  );
};

export default FirstSection;
