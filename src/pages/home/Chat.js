import React from "react";
import Typing from "react-kr-typing-anim";
import char from "../../static/images/home/char.png";

const Chat = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, onDone } = props;
  return (
    <div
      style={{
        width: "90%",
        height: "8%",
        backgroundColor: "#E8F5FE",
        borderRadius: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "7%",
        boxShadow: " 0px 0px 20px rgba(70, 70, 70, 0.6)",
        position: "relative",
      }}
    >
      <img src={char} style={{ position: "absolute", left: 10, top: -5, width: 85 }} />
      <Typing
        onDone={onDone}
        Tag="div"
        preDelay={1500}
        postDelay={1500}
        cursor
        style={{
          width: "55%",
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
      {/* <TypingMultiline
        strs={`안녕~ 난 너희를 도와줄 디노야. 
        버들로에 온 걸 환영해!`}
      /> */}
    </div>
  );
};

export default Chat;
