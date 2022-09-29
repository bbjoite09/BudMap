import React from "react";
import Typing from "react-kr-typing-anim";
import char from "../../static/images/home/char.png";

const Chat = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, onDone } = props;
  return (
    <div
      style={{
        width: "85%",
        height: 67,
        backgroundColor: "white",
        borderRadius: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "7%",
        boxShadow: " 0px 0px 20px rgba(70, 70, 70, 0.6)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <img
        src={char}
        style={{ position: "absolute", left: 10, top: -5, width: window.innerWidth > 500 ? "16%" : "20%" }}
      />
      <Typing
        speed={70}
        onDone={onDone}
        Tag="div"
        preDelay={750}
        postDelay={750}
        cursor
        // fixedWidth
        style={{
          width: window.innerWidth > 500 ? "65%" : "60%",
          textAlign: "left",
          marginLeft: "17%",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: "700",
          wordBreak: "keep-all",
        }}
      >
        {children}
      </Typing>
    </div>
  );
};

export default Chat;
