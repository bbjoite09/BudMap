/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import styled from "styled-components";
import close from "../static/images/modal/close.png";
import background from "../static/images/stamp/stampBackground.png";
import store1_done from "../static/images/stamp/store1_done.png";
import store1_none from "../static/images/stamp/store1_none.png";
import store2_done from "../static/images/stamp/store2_done.png";
import store2_none from "../static/images/stamp/store2_none.png";
import store3_done from "../static/images/stamp/store3_done.png";
import store3_none from "../static/images/stamp/store3_none.png";
import store4_done from "../static/images/stamp/store4_done.png";
import store4_none from "../static/images/stamp/store4_none.png";
import store5_done from "../static/images/stamp/store5_done.png";
import store5_none from "../static/images/stamp/store5_none.png";
import ButtonEffect from "./ButtonEffect";

const BottomSlider = (props) => {
  const [state, setState] = useState({
    isPaneOpen: false,
  });
  const navigate = useNavigate();

  return (
    <div>
      {props.stampCount != 5 && state.isPaneOpen == false && (
        <SliderButton
          onClick={() => {
            setState({ isPaneOpen: true });
            props.setOpen(true);
          }}
          style={{
            bottom: 0,
            height: "8vh",
            overflow: "hidden",
          }}
        >
          <text style={{ color: "#83C4D6", fontWeight: "900", fontSize: "24px" }}>스탬프 확인</text>
        </SliderButton>
      )}
      {props.stampCount == 5 && state.isPaneOpen == false && (
        <SliderButton
          onClick={() => {
            setState({ isPaneOpen: true });
            props.setOpen(true);
          }}
          style={{
            bottom: "-2vh",
            height: "10vh",
            overflow: "hidden",
            backgroundColor: "#e8f5fe",
          }}
        >
          <ButtonEffect />
          <text style={{ color: "#83C4D6", fontWeight: "900", fontSize: "24px", marginBottom: "2vh", zIndex: 22 }}>
            스탬프 확인
          </text>
        </SliderButton>
      )}

      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        from="bottom"
        width="100%"
        hideHeader="true"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          if (props.stampCount == 5) {
            navigate("/end");
            setState({ isPaneOpen: false });
            props.setOpen(false);
          } else {
            setState({ isPaneOpen: false });
            props.setOpen(false);
          }
        }}
      >
        <div
          style={{
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              width: "100%",
              height: "8vh",
              position: "absolute",
              display: "flex",
              justifyContent: "flex-end",
              top: "2%",
              paddingRight: "7%",
              backgroundColor: "#00ff0000",
              border: "none",
              left: 0,
            }}
            onClick={() => {
              if (props.stampCount == 5) {
                navigate("/end");
              } else {
                setState({ isPaneOpen: false });
                props.setOpen(false);
              }
            }}
          >
            <img src={close} style={{ position: "absolute", width: "4%", top: "5%", zIndex: 10 }} />
          </button>

          <img
            src={background}
            style={{ position: "absolute", width: "100%", left: 0, top: "3%", objectFit: "cover", zIndex: 5 }}
          />

          {/* 스탬프 배치 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "flex-end",
              zIndex: 15,
              width: "100%",
              marginTop: "33%",
              marginLeft: "7%",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "-2%",
              }}
            >
              {localStorage.getItem("china") ? (
                <img src={store3_done} style={{ height: "27%", objectFit: "contain" }} />
              ) : (
                <img src={store3_none} style={{ height: "27%", objectFit: "contain" }} />
              )}
              {localStorage.getItem("meat") ? (
                <img src={store4_done} style={{ height: "27%", objectFit: "contain" }} />
              ) : (
                <img src={store4_none} style={{ height: "27%", objectFit: "contain" }} />
              )}
            </div>
            {localStorage.getItem("fish") ? (
              <img src={store2_done} style={{ height: "27%", objectFit: "contain" }} />
            ) : (
              <img src={store2_none} style={{ height: "27%", objectFit: "contain" }} />
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "-3%",
              }}
            >
              {localStorage.getItem("rice") ? (
                <img src={store1_done} style={{ height: "27%", objectFit: "contain" }} />
              ) : (
                <img src={store1_none} style={{ height: "27%", objectFit: "contain" }} />
              )}
              {localStorage.getItem("hanra") ? (
                <img src={store5_done} style={{ height: "27%", objectFit: "contain" }} />
              ) : (
                <img src={store5_none} style={{ height: "27%", objectFit: "contain" }} />
              )}
            </div>
          </div>
        </div>
      </SlidingPane>
    </div>
  );
};

const SliderButton = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  border-radius: 30px 30px 0 0;
  height: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BottomSlider;
