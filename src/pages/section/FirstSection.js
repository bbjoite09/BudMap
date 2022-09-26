import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../elements/Modal";
import arrow from "../../static/images/section/arrow1.png";
import ic1 from "../../static/images/section/ic_sec1_1.png";
import ic2 from "../../static/images/section/ic_sec1_2.png";
import sectionBackground from "../../static/images/section/section1.png";
import store1_1 from "../../static/images/section/store_1_1.jpg";
import store1_2 from "../../static/images/section/store_1_2.jpg";
import store2_1 from "../../static/images/section/store_2_1.jpg";
import store2_2 from "../../static/images/section/store_2_2.jpg";
import { string } from "../../static/strings/string";
import Chat from "../home/Chat";

const FirstSection = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  const setChat = () => {
    if (isOpen1 || isOpen2) {
      return string.storeInfo.stamp.describe;
    } else {
      return string.clickIcon[0];
    }
  };
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
      <Chat>{setChat()}</Chat>
      <Link to="/">
        <img src={arrow} style={{ position: "absolute", width: "15%", left: 30, bottom: 65 }} />
      </Link>
      <img
        src={ic1}
        onClick={() => {
          setOpen1(!isOpen1);
        }}
        style={{ position: "absolute", width: "23%", left: "10%", top: "55%" }}
      />
      <Modal
        isOpen={isOpen1}
        setOpen={setOpen1}
        title={string.storeInfo.store1.title}
        describe={string.storeInfo.store1.describe}
        src1={store1_1}
        src2={store1_2}
      />
      <img
        src={ic2}
        onClick={() => {
          setOpen2(!isOpen2);
        }}
        style={{ position: "absolute", width: "20%", right: "10%", top: "45%" }}
      />
      <Modal
        isOpen={isOpen2}
        setOpen={setOpen2}
        title={string.storeInfo.store2.title}
        describe={string.storeInfo.store2.describe}
        src1={store2_1}
        src2={store2_2}
      />
    </div>
  );
};

export default FirstSection;
