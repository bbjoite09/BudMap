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

import store3_1 from "../../static/images/store/store_3_1.jpg";
import store3_2 from "../../static/images/store/store_3_2.jpg";
import store4_1 from "../../static/images/store/store_4_1.jpg";
import store4_2 from "../../static/images/store/store_4_2.jpg";
import store5_2 from "../../static/images/store/store_5_2.jpg";
import store5_1 from "../../static/images/store/store_5_1.jpg";

import BottomSlider from "../../elements/BottomSlider";
import Modal from "../../elements/Modal";
import { getCookie } from "../../services/cookie";
import { getStampList } from "../../api/stamp.api";

const SecondSection = () => {
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);
  const homeSrc = `/home?token=${getCookie("accesstoken")}`;

  useEffect(() => {
    getStampList();
  }, []);

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
        src={sectionBackground}
        style={{ position: "absolute", width: "100%", objectFit: "cover", height: "90%", bottom: 0 }}
      />
      <Chat>{string.clickIcon[0]}</Chat>
      <Link to={homeSrc}>
        <img src={homeButton} style={{ position: "absolute", width: "10%", right: 80, top: "15%" }} />
      </Link>
      <Link to="/firstSection">
        <img src={arrow} style={{ position: "absolute", width: "10%", right: 30, top: "15%" }} />
      </Link>

      {localStorage.getItem("china") ? (
        <img src={stamp3} style={{ position: "absolute", width: "18%", left: "4%", top: "55%" }} />
      ) : (
        <img
          src={ic3}
          onClick={() => {
            setOpen3(!isOpen3);
          }}
          style={{ position: "absolute", width: "18%", left: "4%", top: "55%" }}
        />
      )}
      <Modal isOpen={isOpen3} setOpen={setOpen3} storeNum={"store3"} src1={store3_1} src2={store3_2} logo={ic3} />

      {localStorage.getItem("meat") ? (
        <img src={stamp4} style={{ position: "absolute", width: "18%", left: "24%", top: "58%" }} />
      ) : (
        <img
          src={ic4}
          onClick={() => {
            setOpen4(!isOpen4);
          }}
          style={{ position: "absolute", width: "18%", left: "24%", top: "58%" }}
        />
      )}
      <Modal isOpen={isOpen4} setOpen={setOpen4} storeNum={"store4"} src1={store4_1} src2={store4_2} logo={ic4} />
      {localStorage.getItem("hanra") ? (
        <img src={stamp5} style={{ position: "absolute", width: "18%", left: "15%", top: "39%" }} />
      ) : (
        <img
          src={ic5}
          onClick={() => {
            setOpen5(!isOpen5);
          }}
          style={{ position: "absolute", width: "18%", left: "15%", top: "39%" }}
        />
      )}
      <Modal isOpen={isOpen5} setOpen={setOpen5} storeNum={"store5"} src1={store5_1} src2={store5_2} logo={ic5} />
      <BottomSlider />
    </div>
  );
};

export default SecondSection;
