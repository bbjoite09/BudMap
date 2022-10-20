import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import { changeKeyName, setStamp } from "../services/stamp";
import close from "../static/images/modal/close.png";
import copy from "../static/images/modal/copyIcon.svg";
import location from "../static/images/modal/locationIcon.svg";
import quizeInfo from "../static/strings/quizeInfo";
import { string } from "../static/strings/string";
import CorrectEffect from "./CorrectEffect";
import Loading from "./Loading";
import RoundButton from "./RoundButton";
import Typography from "./Typography";
import WrongEffect from "./WrongEffect";

const MyModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, setOpen, storeNum, src1, src2, logo, setAnswer, id } = props;
  const [isQuize, setQuize] = useState(false);
  const [isCorrect, setCorrect] = useState(["#C6C6C6", "#C6C6C6", "#C6C6C6"]);
  const [isLoading, setLoading] = useState(false);
  const [isCopy, setCopy] = useState(false);

  const setButtonColor = async (ans, idx) => {
    if (ans == quizeInfo[storeNum].answer) {
      setAnswer("yes");
      setCorrect([...isCorrect.slice(0, idx), "#A9DABE", ...isCorrect.slice(idx + 1)]);
      setTimeout(() => {
        setLoading(true);
        setCorrect([...isCorrect.slice(0, idx), "#C6C6C6", ...isCorrect.slice(idx + 1)]);
      }, [900]);

      setStamp(storeNum[5]);
      setTimeout(() => {
        setOpen(false);
        setQuize(false);
        setAnswer(" ");
        setLoading(false);
      }, [1500]);
    } else if (ans != quizeInfo[storeNum].answer) {
      setTimeout(() => {
        setAnswer("no");
      }, 100);
      setCorrect([...isCorrect.slice(0, idx), "#EF6262", ...isCorrect.slice(idx + 1)]);
      setAnswer("null");
    }
  };
  // 복사 버튼 알림
  const copyAlert = () => {
    setTimeout(() => {
      setCopy(false);
    }, 3500);
    return (
      isCopy && (
        <div
          style={{
            width: "50%",
            height: "5vh",
            backgroundColor: "#bcca68",
            borderRadius: "15px",
            position: "absolute",
            top: "21%",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography color="white">복사되었습니다!</Typography>
        </div>
      )
    );
  };

  return (
    <>
      {isOpen && (
        <div>
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100vh",
              top: 0,
              left: 0,
              background: "rgba(40, 40, 40, 0.5)",
              zIndex: 25,
            }}
            onClick={() => {
              setQuize(false);
              setOpen(false);
              setAnswer(" ");
              setLoading(false);
            }}
          />

          {/* 가게설명 - 앞면 */}
          <div
            id="modal"
            style={{
              width: "85%",
              minHeight: "60vh",
              backgroundColor: "white",
              borderRadius: "30px",
              boxShadow: "0px 0px 30px rgba(70, 70, 70, 0.6)",
              position: "absolute",
              top: "16%",
              left: "50%",
              transform: "translate(-50%, 0)",
              zIndex: 26,
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
                setAnswer(" ");
              }}
              style={{ border: "none", backgroundColor: "#00ff0000", alignSelf: "flex-end", padding: "5% 5% 0 0" }}
            >
              <img src={close} />
            </button>
            <Typography type="title" margin="0 0 2% 0">
              {string.storeInfo[storeNum].title}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
              }}
            >
              <img src={location} style={{ width: "13px", height: "13px" }} />
              <a
                href={string.storeInfo[storeNum].href}
                style={{
                  fontWeight: "500",
                  fontSize: "13px",
                  lineHeight: "22px",
                  whiteSpace: "pre-wrap",
                  letterSpacing: "-0.02em",
                  color: "black",
                  margin: "0 2% 0 2%",
                }}
              >
                {string.storeInfo[storeNum].address}
              </a>
              <button
                style={{ border: "none", backgroundColor: "#00ff0000", height: "13px" }}
                onClick={() => {
                  const address = string.storeInfo[storeNum].address;
                  navigator.clipboard.writeText(address).then(
                    function () {
                      setCopy(true);
                    },
                    function () {
                      alert("복사 실패");
                      /* 복사실패 */
                    },
                  );
                }}
              >
                <img src={copy} style={{ height: "13px" }} />
              </button>
            </div>
            {copyAlert()}
            <Typography type="modalText" margin="2% 0 0 0">
              {string.storeInfo[storeNum].describe}
            </Typography>
            <>
              <MySlider
                {...settings}
                style={{ zIndex: "0", width: window.innerWidth < 500 ? "108%" : "101%", marginTop: "3%" }}
              >
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
              id={id}
              color={localStorage[changeKeyName(storeNum[5])] ? "#C6C6C6" : "#ACDDC0"}
              width="80%"
              margin="19px 0 19px 0"
              onClick={() => {
                setQuize(true);
              }}
              disabled={localStorage[changeKeyName(storeNum[5])] ? "disabled" : null}
            >
              {localStorage[changeKeyName(storeNum[5])] ? "퀴즈를 풀었어요!" : "퀴즈를 풀어볼까요?"}
            </RoundButton>
          </div>
          {/* -------------------------------------------------------------  */}
          {/* 퀴즈 - 뒷면 */}
          {isQuize && (
            <div
              id="box"
              style={{
                width: "85%",
                height: document.getElementById("modal").clientHeight,
                backgroundColor: "white",
                borderRadius: "30px",
                boxShadow: "0px 0px 30px rgba(70, 70, 70, 0.6)",
                position: "absolute",
                top: "16%",
                left: "50%",
                transform: "translate(-50%, 0)",
                zIndex: 26,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                overflowX: "hidden",
              }}
            >
              {isCorrect[0] == "#A9DABE" && <CorrectEffect />}
              {isCorrect[1] == "#A9DABE" && <CorrectEffect />}
              {isCorrect[2] == "#A9DABE" && <CorrectEffect />}
              {isLoading && <Loading />}
              {isCorrect[0] == "#EF6262" && <WrongEffect />}
              {isCorrect[1] == "#EF6262" && <WrongEffect />}
              {isCorrect[2] == "#EF6262" && <WrongEffect />}

              <button
                onClick={() => {
                  setOpen(false);
                  setQuize(false);
                  setAnswer(" ");
                  setLoading(false);
                }}
                style={{ border: "none", backgroundColor: "#00ff0000", alignSelf: "flex-end", padding: "0 5% 0 0" }}
              >
                <img src={close} />
              </button>
              <img src={logo} style={{ width: "15%", marginTop: "-5%", marginBottom: "-1%" }} />
              <Typography type="title" margin="0 0 3% 0">
                {string.storeInfo[storeNum].title}
              </Typography>
              <Typography type="quize" margin="0 0 3% 0">
                {quizeInfo[storeNum].quize}
              </Typography>
              <div style={{ width: "100%", marginTop: "-3%" }}>
                {quizeInfo[storeNum].ex.map((data, idx) => {
                  return (
                    <div key={idx} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                      <RoundButton
                        color={isCorrect[idx]}
                        width="70%"
                        height="68%"
                        margin="3% 0 3% 0"
                        onClick={() => {
                          setButtonColor(data, idx);
                          if (data != quizeInfo[storeNum].answer) {
                            setTimeout(() => {
                              setCorrect([...isCorrect.slice(0, idx), "#C6C6C6", ...isCorrect.slice(idx + 1)]);
                            }, [1600]);
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
          )}
        </div>
      )}
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
