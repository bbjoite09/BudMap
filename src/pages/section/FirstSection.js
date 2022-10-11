/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStampList } from "../../api/stamp.api";
import BottomSlider from "../../elements/BottomSlider";
import Modal from "../../elements/Modal";
import { getCookie } from "../../services/cookie";
import arrow from "../../static/images/section/arrow1.png";
import homeButton from "../../static/images/section/homeButton.png";
import sectionBackground from "../../static/images/section/section1.png";
import stamp1 from "../../static/images/stamp/store1_done.png";
import stamp2 from "../../static/images/stamp/store2_done.png";
import ic1 from "../../static/images/store/store1.png";
import ic2 from "../../static/images/store/store2.png";
import store1_1 from "../../static/images/store/store_1_1.jpg";
import store1_2 from "../../static/images/store/store_1_2.jpg";
import store2_1 from "../../static/images/store/store_2_1.jpg";
import store2_2 from "../../static/images/store/store_2_2.jpg";
import chatBubbble from "../../static/strings/chatBubble";
import { string } from "../../static/strings/string";
import Chat from "../home/Chat";
import link from "../../static/images/linkIcon.png";

const FirstSection = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [stampCount, setStampCount] = useState(0);
  const [isAnswer, setAnswer] = useState("");
  const homeSrc = `/home?token=${getCookie("accesstoken")}`;
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    getStampList().then((res) => setStampCount(res.length));
  }, [localStorage["china"], localStorage["meat"], localStorage["rice"], localStorage["hanra"], localStorage["fish"]]);

  const setChat = (num) => {
    if (isOpen && stampCount == 5) {
      return chatBubbble.stampOpen[1];
    } else if (localStorage["rice"] && localStorage["fish"]) {
      return chatBubbble.SectionDone;
    } else if (isOpen) {
      return chatBubbble.stampOpen[0];
    } else if (isAnswer == "no") {
      return chatBubbble.QuizeNo;
    } else if (isAnswer == "yes") {
      return chatBubbble.QuizeYes[0];
    } else if (isAnswer == "null") {
      return " ";
    } else if (isOpen1 && localStorage["rice"]) {
      return chatBubbble.QuizeDone;
    } else if (isOpen2 && localStorage["fish"]) {
      return chatBubbble.QuizeDone;
    } else if (isOpen1 || isOpen2) {
      return string.storeInfo.stamp.describe;
    } else {
      return string.clickIcon[num];
    }
  };

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
        src={sectionBackground}
        style={{
          position: "absolute",
          width: "100%",
          objectFit: "cover",
          top: window.innerWidth <= 500 ? 0 : "-10%",
        }}
      />
      <a id="firstMapLink" href={string.storeInfo.mapHref}>
        <img
          src={link}
          style={{ width: "18%", position: "absolute", left: "7.5%", zIndex: 30, top: 67, marginTop: "13%" }}
        />
      </a>
      <Chat>{setChat(stampCount)}</Chat>
      <Link to={homeSrc}>
        <img src={homeButton} style={{ position: "absolute", width: "13%", left: 70, bottom: "9vh" }} />
      </Link>
      <Link to="/secondSection">
        <img src={arrow} style={{ position: "absolute", width: "13%", left: 20, bottom: "9vh" }} />
      </Link>

      {localStorage.getItem("rice") ? (
        <img
          src={stamp1}
          onClick={() => {
            setOpen1(!isOpen1);
          }}
          style={{
            position: "absolute",
            width: "18%",
            left: 40,
            top: window.innerWidth <= 500 ? "47%" : "46%",
            zIndex: 1,
          }}
        />
      ) : (
        <img
          id="rice"
          src={ic1}
          onClick={() => {
            setOpen1(!isOpen1);
          }}
          style={{
            position: "absolute",
            width: "16%",
            left: 60,
            top: window.innerWidth / window.innerHeight >= 0.5 ? "50%" : "45%",
            zIndex: 2,
          }}
        />
      )}
      <Modal
        id="rice_btn"
        isOpen={isOpen1}
        setOpen={setOpen1}
        storeNum={"store1"}
        src1={store1_1}
        src2={store1_2}
        logo={ic1}
        setAnswer={setAnswer}
      />
      {localStorage.getItem("fish") ? (
        <img
          src={stamp2}
          onClick={() => {
            setOpen2(!isOpen2);
          }}
          style={{ position: "absolute", width: "30%", right: "5%", top: "37%", zIndex: 1 }}
        />
      ) : (
        <img
          id="fish"
          src={ic2}
          onClick={() => {
            setOpen2(!isOpen2);
          }}
          style={{ position: "absolute", width: "13%", right: "5%", top: "36%", zIndex: 2 }}
        />
      )}
      <Modal
        id="fish_btn"
        isOpen={isOpen2}
        setOpen={setOpen2}
        storeNum={"store2"}
        src1={store2_1}
        src2={store2_2}
        logo={ic2}
        setAnswer={setAnswer}
      />
      <BottomSlider stampCount={stampCount} setOpen={setOpen} />
    </div>
  );
};

export default FirstSection;
