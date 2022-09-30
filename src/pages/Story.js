import React, { useState } from "react";
import Typing from "react-kr-typing-anim";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimationBig, AnimationForLogin, AnimationLR, AnimationShine, AnimationTB } from "../elements/Animation";
import SpeechBubble from "../elements/SpeechBubble";
import Typography from "../elements/Typography";
import kakaoLoginButton from "../static/images/story/kakaoLoginButton.png";
import loginDescribe from "../static/images/story/loginDescribe.png";
import background1 from "../static/images/story/storyBackground1.png";
import background2 from "../static/images/story/storyBackground2.png";
import background3 from "../static/images/story/storyBackground3.png";
import logo from "../static/images/story/logo.png";
import story from "../static/strings/story";

const Story = () => {
  const [storyState, setStoryState] = useState(0);

  const getStory = (num, time) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          alignItems: "flex-start",
          marginTop: "10%",
          marginLeft: "7%",
        }}
      >
        <Typing
          Tag="div"
          speed={70}
          preDelay={0}
          style={{
            fontSize: "23px",
            lineHeight: "34px",
            fontWeight: "700",
            wordBreak: "keep-all",
          }}
        >
          {story[num][0]}
        </Typing>
        <Typing
          Tag="div"
          speed={60}
          preDelay={time}
          style={{
            fontSize: "23px",
            lineHeight: "34px",
            fontWeight: "700",
            wordBreak: "keep-all",
          }}
        >
          {story[num][1]}
        </Typing>
        <Typography
          type="speech"
          fontSize="17px"
          zIndex="15"
          position="absolute"
          left="10%"
          bottom={0}
          onClick={() => {
            setStoryState(storyState - 1);
          }}
        >
          ◀︎◀︎ 이전
        </Typography>
        <Typography
          type="speech"
          fontSize="17px"
          zIndex="15"
          position="absolute"
          right="10%"
          bottom={0}
          onClick={() => {
            setStoryState(storyState + 1);
          }}
        >
          다음 ▶︎▶
        </Typography>
      </div>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      {storyState == 0 && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typing
            Tag="div"
            preDelay={300}
            speed={70}
            postDelay={1500}
            style={{
              fontSize: "23px",
              lineHeight: "34px",
              fontWeight: "700",
              wordBreak: "keep-all",
              color: "white",
            }}
          >
            {story.num1}
          </Typing>
          <Typography
            type="speech"
            color="white"
            fontSize="17px"
            position="absolute"
            right="10%"
            bottom={0}
            onClick={() => {
              setStoryState(storyState + 1);
            }}
          >
            다음 ▶︎▶
          </Typography>
        </div>
      )}
      {storyState == 1 && (
        <Container>
          {getStory("num2", 1000)}
          <AnimationLR src={background1} />
          <SpeechBubble position="absolute" right="-5%" bottom="19%" width="50%">
            하암-
          </SpeechBubble>
        </Container>
      )}
      {storyState == 2 && (
        <Container>
          {getStory("num3", 1000)}
          <AnimationBig src={background2} style={{ position: "absolute", width: "190%", left: "-45%", bottom: 0 }} />
          <SpeechBubble position="absolute" right="-5%" top="15%" width="50%">
            어라?
          </SpeechBubble>
        </Container>
      )}
      {storyState == 3 && (
        <Container>
          {getStory("num4", 1900)}
          <AnimationShine src={background1} />
        </Container>
      )}
      {storyState == 4 && (
        <Container>
          {getStory("num5", 2500)}
          <AnimationTB src={background3} />
          <SpeechBubble position="absolute" left="5%" top="20%" width="65%" height="22%">
            {"이 녀석들 어디에 숨어있는거야?\n반드시 찾고 말겠어!"}
          </SpeechBubble>
        </Container>
      )}
      {storyState == 5 && (
        <Container>
          <img
            src={background3}
            style={{
              position: "absolute",
              width: "100%",
              bottom: window.innerWidth / window.innerHeight >= 0.56 ? "-25%" : "-10%",
            }}
          />
          <img src={logo} style={{ position: "absolute", width: "70%", top: "10%", left: "15%" }} />
          <AnimationForLogin src={loginDescribe} />
          <Link to="/home">
            <img
              src={kakaoLoginButton}
              style={{
                position: "absolute",
                width: "70%",
                top: "33%",
                zIndex: 10,
                left: "15%",
              }}
            />
          </Link>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #83c4d6;
  display: flex;
  alignitems: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`;

export default Story;
