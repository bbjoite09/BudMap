/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { useState } from "react";
import close from "../static/images/modal/close.png";
import background from "../static/images/stamp/stampBackground.png";
import store1_none from "../static/images/stamp/store1_none.png";
import store2_none from "../static/images/stamp/store2_none.png";
import store3_none from "../static/images/stamp/store3_none.png";
import store4_none from "../static/images/stamp/store4_none.png";
import store5_none from "../static/images/stamp/store5_none.png";
import store1_done from "../static/images/stamp/store1_done.png";
import store2_done from "../static/images/stamp/store2_done.png";
import store3_done from "../static/images/stamp/store3_done.png";
import store4_done from "../static/images/stamp/store4_done.png";
import store5_done from "../static/images/stamp/store5_done.png";
import { Link } from "react-router-dom";

const BottomSlider = (props) => {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

  return (
    <div>
      <div
        onClick={() => setState({ isPaneOpen: true })}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          borderRadius: "30px 30px 0 0",
          height: "8vh",
          backgroundColor: "white",
        }}
      />
      <button
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "8vh",
          left: 0,
          border: "none",
          backgroundColor: "#00ff0000",
        }}
        onClick={() => {
          setState({ isPaneOpen: true });
        }}
      >
        <text style={{ color: "#83C4D6", fontWeight: "900", fontSize: "24px" }}>스탬프 확인</text>
      </button>
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
          setState({ isPaneOpen: false });
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
          {props.stampCount == 5 ? (
            <Link to={"/end"}>
              <button
                style={{
                  width: "100%",
                  height: "8vh",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  top: "2%",
                  paddingRight: "7%",
                  backgroundColor: "#00ff0000",
                  border: "none",
                  left: 0,
                }}
              >
                <img src={close} style={{ position: "absolute", width: "5%", top: "4%", zIndex: 10 }} />
              </button>
            </Link>
          ) : (
            <button
              style={{
                width: "100%",
                height: "8vh",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                top: "2%",
                paddingRight: "7%",
                backgroundColor: "#00ff0000",
                border: "none",
                left: 0,
              }}
              onClick={() => {
                setState({ isPaneOpen: false });
              }}
            >
              <img src={close} style={{ position: "absolute", width: "5%", top: "4%", zIndex: 10 }} />
            </button>
          )}
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
              {localStorage.getItem("china") ? <img src={store3_done} /> : <img src={store3_none} />}
              {localStorage.getItem("meat") ? <img src={store4_done} /> : <img src={store4_none} />}
            </div>
            {localStorage.getItem("fish") ? <img src={store2_done} /> : <img src={store2_none} />}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "-3%",
              }}
            >
              {localStorage.getItem("rice") ? <img src={store1_done} /> : <img src={store1_none} />}
              {localStorage.getItem("hanra") ? <img src={store5_done} /> : <img src={store5_none} />}
            </div>
          </div>
        </div>
      </SlidingPane>
    </div>
  );
};

export default BottomSlider;
