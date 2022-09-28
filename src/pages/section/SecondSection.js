import React, { useState } from "react";
import sectionBackground from "../../static/images/section/section2.png";
import { string } from "../../static/strings/string";
import Chat from "../home/Chat";
import arrow from "../../static/images/section/arrow2.png";
import homeButton from "../../static/images/section/homeButton.png";
import { Link } from "react-router-dom";
import ic3 from "../../static/images/store/store3.png";
import ic4 from "../../static/images/store/store4.png";
import ic5 from "../../static/images/store/store5.png";
import store3_1 from "../../static/images/store/store_3_1.jpg";
import store3_2 from "../../static/images/store/store_3_2.jpg";
import store4_1 from "../../static/images/store/store_4_1.jpg";
import store4_2 from "../../static/images/store/store_4_2.jpg";
import store5_2 from "../../static/images/store/store_5_2.jpg";
import store5_1 from "../../static/images/store/store_5_1.jpg";

import BottomSlider from "../../elements/BottomSlider";
import Modal from "../../elements/Modal";

const SecondSection = () => {
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

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
      <img src={sectionBackground} style={{ position: "absolute", width: "100%", height: "90%", top: 0 }} />
      <Chat>{string.clickIcon[0]}</Chat>
      <Link to="/">
        <img src={homeButton} style={{ position: "absolute", width: "10%", right: 88, top: "15%" }} />
      </Link>
      <Link to="/firstSection">
        <img src={arrow} style={{ position: "absolute", width: "10%", right: 30, top: "15%" }} />
      </Link>

      <img
        src={ic3}
        onClick={() => {
          setOpen3(!isOpen3);
        }}
        style={{ position: "absolute", width: "13%", left: "28%", top: "45%" }}
      />
      <Modal isOpen={isOpen3} setOpen={setOpen3} storeNum={"store3"} src1={store3_1} src2={store3_2} />

      <img
        src={ic4}
        onClick={() => {
          setOpen4(!isOpen4);
        }}
        style={{ position: "absolute", width: "13%", left: "45%", top: "46%" }}
      />
      <Modal isOpen={isOpen4} setOpen={setOpen4} storeNum={"store4"} src1={store4_1} src2={store4_2} />
      <img
        src={ic5}
        onClick={() => {
          setOpen5(!isOpen5);
        }}
        style={{ position: "absolute", width: "13%", left: "38%", top: "35%" }}
      />
      <Modal isOpen={isOpen5} setOpen={setOpen5} storeNum={"store5"} src1={store5_1} src2={store5_2} />
      <BottomSlider />
    </div>
  );
};

export default SecondSection;
