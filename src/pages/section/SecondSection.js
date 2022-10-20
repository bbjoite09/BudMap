/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import sectionBackground from "../../static/images/section/section2.png";
import { string } from "../../static/strings/string";
import Chat from "../home/Chat";
import arrow from "../../static/images/section/arrow2.png";
import homeButton from "../../static/images/section/homeButton.png";
import { Link } from "react-router-dom";
import ic3 from "../../static/images/store/store3.png";
import ic4 from "../../static/images/store/store4.png";
import ic5 from "../../static/images/store/store5.png";
import stamp3 from "../../static/images/stamp/store3_done.png";
import stamp4 from "../../static/images/stamp/store4_done.png";
import stamp5 from "../../static/images/stamp/store5_done.png";
import link from "../../static/images/linkIcon.png";

import store3_1 from "../../static/images/store/store_3_1.jpg";
import store3_2 from "../../static/images/store/store_3_2.jpg";
import store4_1 from "../../static/images/store/store_4_1.jpg";
import store4_2 from "../../static/images/store/store_4_2.jpg";
import store5_2 from "../../static/images/store/store_5_2.jpg";
import store5_1 from "../../static/images/store/store_5_1.jpg";

import BottomSlider from "../../elements/BottomSlider";
import Modal from "../../elements/Modal";
import { getCookie } from "../../services/cookie";
import chatBubbble from "../../static/strings/chatBubble";
import { getStampList } from "../../services/stamp";

const SecondSection = () => {
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);
  const [isAnswer, setAnswer] = useState("");
  const [stampCount, setStampCount] = useState(0);
  const homeSrc = `/home?token=${getCookie("accesstoken")}`;
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const count = getStampList();
    setStampCount(count);
  }, [localStorage["china"], localStorage["meat"], localStorage["rice"], localStorage["hanra"], localStorage["fish"]]);

  const setChat = (num) => {
    if (isOpen && stampCount == 5) {
      return chatBubbble.stampOpen[1];
    } else if (localStorage["china"] && localStorage["meat"] && localStorage["hanra"]) {
      return chatBubbble.SectionDone;
    } else if (isOpen) {
      return chatBubbble.stampOpen[0];
    } else if (isAnswer == "no") {
      return chatBubbble.QuizeNo;
    } else if (isAnswer == "yes") {
      return chatBubbble.QuizeYes[0];
    } else if (isAnswer == "null") {
      return " ";
    } else if (isOpen3 && localStorage["china"]) {
      return chatBubbble.QuizeDone;
    } else if (isOpen4 && localStorage["meat"]) {
      return chatBubbble.QuizeDone;
    } else if (isOpen5 && localStorage["hanra"]) {
      return chatBubbble.QuizeDone;
    } else if (isOpen3 || isOpen4 || isOpen5) {
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
        style={{ position: "absolute", width: "100%", objectFit: "cover", height: "90%", bottom: 0 }}
      />
      <a id="secMapLink" href={string.storeInfo.mapHref}>
        <img
          src={link}
          style={{ width: "18%", position: "absolute", left: "7.5%", zIndex: 14, top: 67, marginTop: "13%" }}
        />
      </a>
      <Chat>{setChat(stampCount)}</Chat>
      <Link to={homeSrc}>
        <img src={homeButton} style={{ position: "absolute", width: "13%", left: 20, bottom: "9vh" }} />
      </Link>
      <Link to="/firstSection">
        <img
          src={arrow}
          onClick={() => {
            setOpen3(!isOpen3);
          }}
          style={{ position: "absolute", width: "13%", left: 70, bottom: "9vh" }}
        />
      </Link>

      {localStorage.getItem("china") ? (
        <img
          src={stamp3}
          onClick={() => {
            setOpen3(!isOpen3);
          }}
          style={{ position: "absolute", width: "18%", left: "4%", top: "55%", zIndex: 1 }}
        />
      ) : (
        <img
          id="china"
          src={ic3}
          onClick={() => {
            setOpen3(!isOpen3);
          }}
          style={{ position: "absolute", width: "18%", left: "4%", top: "55%", zIndex: 2 }}
        />
      )}
      <Modal
        id="china_btn"
        isOpen={isOpen3}
        setOpen={setOpen3}
        storeNum={"store3"}
        src1={store3_1}
        src2={store3_2}
        logo={ic3}
        setAnswer={setAnswer}
      />

      {localStorage.getItem("meat") ? (
        <img
          src={stamp4}
          onClick={() => {
            setOpen4(!isOpen4);
          }}
          style={{ position: "absolute", width: "18%", left: "24%", top: "58%", zIndex: 1 }}
        />
      ) : (
        <img
          id="meat"
          src={ic4}
          onClick={() => {
            setOpen4(!isOpen4);
          }}
          style={{ position: "absolute", width: "18%", left: "24%", top: "58%", zIndex: 2 }}
        />
      )}
      <Modal
        id="meat_btn"
        isOpen={isOpen4}
        setOpen={setOpen4}
        storeNum={"store4"}
        src1={store4_1}
        src2={store4_2}
        logo={ic4}
        setAnswer={setAnswer}
      />
      {localStorage.getItem("hanra") ? (
        <img
          src={stamp5}
          onClick={() => {
            setOpen5(!isOpen5);
          }}
          style={{ position: "absolute", width: "18%", left: "25%", top: "37%", zIndex: 1 }}
        />
      ) : (
        <img
          id="hanra"
          src={ic5}
          onClick={() => {
            setOpen5(!isOpen5);
          }}
          style={{ position: "absolute", width: "18%", left: "25%", top: "40%", zIndex: 2 }}
        />
      )}
      <Modal
        id="hanra_btn"
        isOpen={isOpen5}
        setOpen={setOpen5}
        storeNum={"store5"}
        src1={store5_1}
        src2={store5_2}
        logo={ic5}
        setAnswer={setAnswer}
      />
      <BottomSlider stampCount={stampCount} setOpen={setOpen} />
    </div>
  );
};

export default SecondSection;
