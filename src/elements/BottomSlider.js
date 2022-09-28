import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import React, { useState } from "react";
import stampBar from "../static/images/stamp/stampbar.png";
import background from "../static/images/stamp/stampBackground.png";

const BottomSlider = () => {
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
      <img src={stampBar} style={{ position: "absolute", bottom: "4%", width: "8%", left: "46%" }} />
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
        <div style={{ overflow: "hidden" }}>
          <img
            src={stampBar}
            onClick={() => {
              const el = document.getElementsByClassName("slide-pane_from_bottom");
              console.log(el);
              setState({ isPaneOpen: false });
            }}
            style={{ position: "absolute", width: "8%", top: "3%", left: "46%" }}
          />
          <img
            src={background}
            style={{ position: "absolute", width: "100%", left: 0, top: "9%", objectFit: "cover" }}
          />
        </div>
      </SlidingPane>
    </div>
  );
};

export default BottomSlider;
