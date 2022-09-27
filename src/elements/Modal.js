import React from "react";
import close from "../static/images/modal/close.png";
import Typography from "./Typography";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoundButton from "./RoundButton";

const MyModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, setOpen, title, describe, src1, src2 } = props;

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
            onClick={() => setOpen(false)}
          />

          <div
            style={{
              width: window.innerWidth <= 500 ? "85%" : "400px",
              minHeight: "60vh",
              backgroundColor: "white",
              borderRadius: "30px",
              boxShadow: "0px 0px 30px rgba(70, 70, 70, 0.6)",
              position: "absolute",
              top: window.innerWidth <= 500 && window.innerHeight <= 850 ? "50%" : "55%",
              left: "50%",
              transform: "translate(-50%, -50%)",
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
              }}
              style={{ border: "none", backgroundColor: "#00ff0000", alignSelf: "flex-end", padding: "5% 5% 0 0" }}
            >
              <img src={close} />
            </button>
            <Typography type="title" margin="0 0 3% 0">
              {title}
            </Typography>
            <Typography>{describe}</Typography>
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
            <RoundButton color="#C6C6C6" width="80%" margin="4% 0 4% 0">
              퀴즈를 풀어볼까요?
            </RoundButton>
          </div>
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
