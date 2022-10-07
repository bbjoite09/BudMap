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
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "7%",
        boxShadow: " 0px 0px 20px rgba(70, 70, 70, 0.6)",
        position: "relative",
        zIndex: 100,
      }}
    >
      <img
        src={char}
        style={{
          position: "absolute",
          left: "3%",
          top: -1,
          width: "17%",
        }}
      />
      <div style={{ width: "74%", marginRight: "3%", marginLeft: "23%" }}>
        <Typing
          speed={30}
          onDone={onDone}
          Tag="div"
          preDelay={750}
          postDelay={750}
          fixedWidth
          style={{
            textAlign: "left",
            width: "100%",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "700",
            wordBreak: "keep-all",
          }}
        >
          {children}
        </Typing>
      </div>
    </div>
  );
};

export default Chat;
