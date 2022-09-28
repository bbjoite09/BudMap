import React, { useState } from "react";
import Chat from "./Chat";
import { string } from "../../static/strings/string";
import background from "../../static/images/home/background.png";
import backgroundCom from "../../static/images/home/backgroundForCom.png";
import { Link } from "react-router-dom";
import ic1 from "../../static/images/store/store1.png";
import ic2 from "../../static/images/store/store2.png";
import ic3 from "../../static/images/store/store3.png";
import ic4 from "../../static/images/store/store4.png";
import ic5 from "../../static/images/store/store5.png";

import BottomSlider from "../../elements/BottomSlider";

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
      <img
        src={window.innerWidth <= 500 || window.innerHeight >= 850 ? background : backgroundCom}
        style={{ position: "absolute", width: "100%", marginTop: "25%", objectFit: "cover" }}
      />
      <Link to="/firstSection">
        <div style={{ position: "absolute", width: "45%", height: "30%", top: "25%", right: 0 }} />
        <img src={ic1} style={{ position: "absolute", width: "18%", top: "35%", right: 95 }} />
        <img src={ic2} style={{ position: "absolute", width: "15%", top: "40%", right: 0 }} />
      </Link>
      <Link to="/secondSection">
        <div style={{ position: "absolute", width: "55%", height: "30%", top: "45%", left: 0 }} />
        <img src={ic3} style={{ position: "absolute", width: "20%", top: "57%", left: 25 }} />
        <img src={ic4} style={{ position: "absolute", width: "20%", top: "55%", left: 115 }} />
        <img src={ic5} style={{ position: "absolute", width: "20%", top: "48%", left: 85 }} />
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
      <BottomSlider />
    </div>
  );
};

export default Home;
