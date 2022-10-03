import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { getStampList, updateStamp } from "../api/stamp.api";
import close from "../static/images/modal/close.png";
import quizeInfo from "../static/strings/quizeInfo";
import { string } from "../static/strings/string";
import RoundButton from "./RoundButton";
import Typography from "./Typography";

export const storeNumConverter = (num) => {
  switch (num) {
    case "1":
      return 5;
    case "2":
      return 2;
    case "3":
      return 1;
    case "4":
      return 4;
    case "5":
      return 3;
  }
};

const saveStamp = async (num) => {
  /**
   * 1 : 중국성, 2 : 장어, 3 : 한라산 도새기, 4 : 고기가 맛있는 집, 5 : 떡볶이
   * 저장하고 싶은 것 넣기, 중복 저장 안 됨
   */
  await updateStamp(num);
};

const MyModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, setOpen, storeNum, src1, src2, logo, setAnswer } = props;
  const [isQuize, setQuize] = useState(false);
  const [isCorrect, setCorrect] = useState(["#C6C6C6", "#C6C6C6", "#C6C6C6"]);

  const setButtonColor = async (ans, idx) => {
    if (ans == quizeInfo[storeNum].answer) {
      setAnswer("yes");
      setCorrect([...isCorrect.slice(0, idx), "#A9DABE", ...isCorrect.slice(idx + 1)]);
      const serverStoreNum = storeNumConverter(storeNum[5]);
      await saveStamp(serverStoreNum);
      await getStampList();
    } else if (ans != quizeInfo[storeNum].answer) {
      setAnswer("no");
      setCorrect([...isCorrect.slice(0, idx), "#EF6262", ...isCorrect.slice(idx + 1)]);
    }
  };

  return (
    <>
      {isOpen ? (
        <div>
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100vh",
              top: 0,
              left: 0,
              background: "rgba(40, 40, 40, 0.5)",
              zIndex: 5,
            }}
            onClick={() => {
              setQuize(false);
              setOpen(false);
              setAnswer("null");
            }}
          />

          {/* 가게설명 - 앞면 */}
          <div
            id="modal"
            style={{
              width: window.innerWidth <= 500 ? "85%" : "400px",
              minHeight: "60vh",
              backgroundColor: "white",
              borderRadius: "30px",
              boxShadow: "0px 0px 30px rgba(70, 70, 70, 0.6)",
              position: "absolute",
              top: "17%",
              left: "50%",
              transform: "translate(-50%, 0)",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              overflowX: "hidden",
            }}
          >
            <button
              onClick={() => {
                setOpen(false);
                setAnswer("null");
              }}
              style={{ border: "none", backgroundColor: "#00ff0000", alignSelf: "flex-end", padding: "5% 5% 0 0" }}
            >
              <img src={close} />
            </button>
            <Typography type="title" margin="0">
              {string.storeInfo[storeNum].title}
            </Typography>
            <Typography margin="3% 0 1% 0">{string.storeInfo[storeNum].describe}</Typography>
            <>
              <MySlider {...settings} style={{ zIndex: "0", width: "110%", marginTop: "3%" }}>
                <>
                  <div style={{ paddingLeft: "2%" }}>
                    <img src={src1} style={{ width: "100%", borderRadius: "30px" }} />
                  </div>
                </>
                <>
                  <div style={{ paddingLeft: "2%" }}>
                    <img src={src2} style={{ width: "100%", borderRadius: "30px" }} />
                  </div>
                </>
              </MySlider>
            </>
            <RoundButton
              color="#ACDDC0"
              width="80%"
              margin="5% 0 6% 0"
              onClick={() => {
                setQuize(true);
              }}
            >
              퀴즈를 풀어볼까요?
            </RoundButton>
          </div>

          {/* 퀴즈 - 뒷면 */}
          {isQuize ? (
            <div
              style={{
                width: window.innerWidth <= 500 ? "85%" : "400px",
                height: document.getElementById("modal").clientHeight,
                backgroundColor: "white",
                borderRadius: "30px",
                boxShadow: "0px 0px 30px rgba(70, 70, 70, 0.6)",
                position: "absolute",
                top: "17%",
                left: "50%",
                transform: "translate(-50%, 0)",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                overflowX: "hidden",
              }}
            >
              <button
                onClick={() => {
                  setOpen(false);
                  setQuize(false);
                  setAnswer("null");
                }}
                style={{ border: "none", backgroundColor: "#00ff0000", alignSelf: "flex-end", padding: "0 5% 0 0" }}
              >
                <img src={close} />
              </button>
              <img src={logo} style={{ width: "15%", marginTop: "-5%", marginBottom: "-1%" }} />
              <Typography type="title" margin="0 0 3% 0">
                {string.storeInfo[storeNum].title}
              </Typography>
              <Typography margin="0 0 3% 0">{quizeInfo[storeNum].quize}</Typography>
              <div style={{ width: "100%" }}>
                {quizeInfo[storeNum].ex.map((data, idx) => {
                  return (
                    <div key={idx} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                      <RoundButton
                        color={isCorrect[idx]}
                        width="65%"
                        margin="3% 0 3% 0"
                        onClick={() => {
                          setButtonColor(data, idx);
                          if (data != quizeInfo[storeNum].answer) {
                            setTimeout(() => {
                              setCorrect([...isCorrect.slice(0, idx), "#C6C6C6", ...isCorrect.slice(idx + 1)]);
                            }, [700]);
                          }
                        }}
                      >
                        {data}
                      </RoundButton>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  vertical: false,
};

const MySlider = styled(Slider)`
  .slick-dots li {
    margin: 0 auto;
  }
  .slick-dots li button:before {
    position: absolute;
    color: white;
    content: "•";
    margin: 0 auto;
    font-size: 8px;
    opacity: 1;
    text-align: center;
  }
  .slick-dots li.slick-active button:before {
    color: #a9dabe;
  }
  .slick-dots {
    left: 7px;
    bottom: 15px;
  }
`;

export default MyModal;
