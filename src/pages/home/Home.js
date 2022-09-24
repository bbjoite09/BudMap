import React, { useState } from "react";
import Chat from "./Chat";
import { chatTutorial } from "../../static/strings/chatTutorial";
import background from "../../static/images/home/background.png";

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
      <img src={background} style={{ position: "absolute", width: "100%", height: "100vh" }} />
      <Chat
        onDone={() => {
          if (next < chatTutorial.length - 1) {
            setNext(next + 1);
          }
        }}
      >
        {chatTutorial[next]}
      </Chat>
    </div>
  );
};

export default Home;
