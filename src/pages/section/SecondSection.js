import React from "react";
import sectionBackground from "../../static/images/section/section2.png";
import { string } from "../../static/strings/string";
import Chat from "../home/Chat";
import arrow from "../../static/images/section/arrow2.png";
import { Link } from "react-router-dom";

const SecondSection = () => {
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
      <Link to="/">
        <img src={arrow} style={{ position: "absolute", width: "15%", right: 30, top: "15%" }} />
      </Link>
    </div>
  );
};

export default SecondSection;
