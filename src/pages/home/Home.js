import React, { useState } from "react";
import Chat from "./Chat";
import { string } from "../../static/strings/string";
import background from "../../static/images/home/background.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [next, setNext] = useState(0);
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
      <img src={background} style={{ position: "absolute", width: "100%", marginTop: "28%" }} />
      <Link to="/firstSection">
        <div style={{ position: "absolute", width: "100%", height: "40%", top: "15%" }} />
      </Link>
      <Link to="/secondSection">
        <div style={{ position: "absolute", width: "80%", height: "30%", top: "55%", left: 0 }} />
      </Link>
      <Chat
        onDone={() => {
          if (next < string.chatTutorial.length - 1) {
            setNext(next + 1);
          }
        }}
      >
        {string.chatTutorial[next]}
      </Chat>
    </div>
  );
};

export default Home;
