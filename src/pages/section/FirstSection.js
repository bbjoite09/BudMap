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

const FirstSection = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [stampCount, setStampCount] = useState(0);
  const [isAnswer, setAnswer] = useState("");
  const homeSrc = `/home?token=${getCookie("accesstoken")}`;

  useEffect(() => {
    getStampList().then((res) => setStampCount(res.length));
  }, [localStorage["china"], localStorage["meat"], localStorage["rice"], localStorage["hanra"], localStorage["fish"]]);

  const setChat = (num) => {
    if (isAnswer == "no") {
      return chatBubbble.QuizeNo;
    } else if (isAnswer == "yes") {
      return chatBubbble.QuizeYes[0];
    } else if (isAnswer == "null") {
      return "";
    } else if (isOpen1 || isOpen2) {
      return string.storeInfo.stamp.describe;
    } else {
      return string.clickIcon[num];
    }
  };
  console.log(isAnswer);

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
      <img src={sectionBackground} style={{ position: "absolute", width: "100%", objectFit: "cover", top: "0%" }} />
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
            left: 60,
            top: window.innerWidth / window.innerHeight >= 0.5 ? "50%" : "s%",
          }}
        />
      ) : (
        <img
          src={ic1}
          onClick={() => {
            setOpen1(!isOpen1);
          }}
          style={{
            position: "absolute",
            width: "16%",
            left: 60,
            top: window.innerWidth / window.innerHeight >= 0.5 ? "50%" : "45%",
          }}
        />
      )}
      <Modal
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
          style={{ position: "absolute", width: "30%", right: "10%", top: "41%" }}
        />
      ) : (
        <img
          src={ic2}
          onClick={() => {
            setOpen2(!isOpen2);
          }}
          style={{ position: "absolute", width: "15%", right: "10%", top: "41%" }}
        />
      )}
      <Modal
        isOpen={isOpen2}
        setOpen={setOpen2}
        storeNum={"store2"}
        src1={store2_1}
        src2={store2_2}
        logo={ic2}
        setAnswer={setAnswer}
      />
      <BottomSlider stampCount={stampCount} />
    </div>
  );
};

export default FirstSection;
