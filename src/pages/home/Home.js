/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from "../../static/images/home/background.png";
import link from "../../static/images/linkIcon.png";
import cloudBottom from "../../static/images/home/cloudBottom.png";
import cloudTop from "../../static/images/home/cloudTop.png";
import stamp1 from "../../static/images/stamp/store1_done.png";
import stamp2 from "../../static/images/stamp/store2_done.png";
import stamp3 from "../../static/images/stamp/store3_done.png";
import stamp4 from "../../static/images/stamp/store4_done.png";
import stamp5 from "../../static/images/stamp/store5_done.png";
import ic1 from "../../static/images/store/store1.png";
import ic2 from "../../static/images/store/store2.png";
import ic3 from "../../static/images/store/store3.png";
import ic4 from "../../static/images/store/store4.png";
import ic5 from "../../static/images/store/store5.png";
import { string } from "../../static/strings/string";
import Chat from "./Chat";

import styled, { keyframes } from "styled-components";
import BottomSlider from "../../elements/BottomSlider";
import { getCookie, setCookie } from "../../services/cookie";
import chatBubbble from "../../static/strings/chatBubble";
import { getStamp, getStampList } from "../../services/stamp";

const Home = () => {
  const [next, setNext] = useState(0);
  const [stampCount, setStampCount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const setChat = (num) => {
    if (isOpen && stampCount == 5) {
      return chatBubbble.stampOpen[1];
    } else if (isOpen) {
      return chatBubbble.stampOpen[0];
    } else if (getCookie("visit") || stampCount) {
      return string.clickIcon[num];
    } else {
      return string.chatTutorial[next];
    }
  };

  useEffect(() => {
    const count = getStampList();
    setStampCount(count);
  }, [localStorage["china"], localStorage["meat"], localStorage["rice"], localStorage["hanra"], localStorage["fish"]]);

  return (
    <div
      style={{
        width: "100%",
        height: `${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? "-webkit-fill-available" : "100vh"}`,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#83C4D6",
        position: "relative",
      }}
    >
      <img
        src={background}
        style={{
          position: "absolute",
          width: "100%",
          top: "17%",
          objectFit: "cover",
        }}
      />
      <a id="homeMapLink" href={string.storeInfo.mapHref}>
        <img
          src={link}
          style={{ width: "18%", position: "absolute", left: "7.5%", zIndex: 14, top: 67, marginTop: "13%" }}
        />
      </a>
      <Chat
        onDone={() => {
          if (next < string.chatTutorial.length - 1) {
            setNext(next + 1);
          }
        }}
      >
        {setChat(stampCount)}
      </Chat>
      <AnimationTop src={cloudTop} />
      <AnimationBottom src={cloudBottom} />
      <Link
        to="/firstSection"
        onClick={() => {
          if (getCookie("visit") == undefined) {
            setCookie("visit", true);
          }
        }}
      >
        {localStorage.getItem("rice") ? (
          <img src={stamp1} style={{ position: "absolute", width: "16%", top: "35%", right: 100, zIndex: 15 }} />
        ) : (
          <img src={ic1} style={{ position: "absolute", width: "12%", top: "35%", right: 100, zIndex: 15 }} />
        )}
      </Link>
      <Link
        to="/firstSection"
        onClick={() => {
          if (getCookie("visit") == undefined) {
            setCookie("visit", true);
          }
        }}
      >
        {localStorage.getItem("fish") ? (
          <img src={stamp2} style={{ position: "absolute", width: "25%", top: "40%", right: 15, zIndex: 15 }} />
        ) : (
          <img src={ic2} style={{ position: "absolute", width: "10%", top: "37%", right: 15, zIndex: 15 }} />
        )}
      </Link>
      <Link
        to="/secondSection"
        onClick={() => {
          if (getCookie("visit") == undefined) {
            setCookie("visit", true);
          }
        }}
      >
        {localStorage.getItem("china") ? (
          <img src={stamp3} style={{ position: "absolute", width: "20%", top: "57%", left: 25, zIndex: 1 }} />
        ) : (
          <img src={ic3} style={{ position: "absolute", width: "14%", top: "55%", left: 25, zIndex: 2 }} />
        )}
      </Link>
      <Link
        to="/secondSection"
        onClick={() => {
          if (getCookie("visit") == undefined) {
            setCookie("visit", true);
          }
        }}
      >
        {localStorage.getItem("meat") ? (
          <img src={stamp4} style={{ position: "absolute", width: "20%", top: "55%", left: 120, zIndex: 1 }} />
        ) : (
          <img src={ic4} style={{ position: "absolute", width: "13%", top: "56%", left: 120, zIndex: 2 }} />
        )}
      </Link>
      <Link
        to="/secondSection"
        onClick={() => {
          if (getCookie("visit") == undefined) {
            setCookie("visit", true);
          }
        }}
      >
        {localStorage.getItem("hanra") ? (
          <img src={stamp5} style={{ position: "absolute", width: "20%", top: "48%", left: 90, zIndex: 1 }} />
        ) : (
          <img src={ic5} style={{ position: "absolute", width: "13%", top: "49%", left: 90, zIndex: 2 }} />
        )}
      </Link>

      <BottomSlider stampCount={stampCount} setOpen={setOpen} />
    </div>
  );
};

const moveRignt = keyframes`{
  from {
    margin-left: -294%;
  }
  to {
    margin-left: 0%;
  }
}`;

const AnimationTop = styled.img`
  position: absolute;
  animation: ${moveRignt} 18s linear infinite;
  z-index: 5;
  width: 400%;
  top: 10%;
`;

const moveLeft = keyframes`{
  from {
    margin-left: 0%;
  }
  to {
    margin-left: -243%;
  }
}`;

const AnimationBottom = styled.img`
  position: absolute;
  animation: ${moveLeft} 17s linear infinite;
  z-index: 5;
  width: 400%;
  bottom: 10%;
`;

export default Home;
