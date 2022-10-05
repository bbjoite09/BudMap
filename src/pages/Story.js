import React, { useState } from "react";
import Typing from "react-kr-typing-anim";
import styled from "styled-components";
import { AnimationBig, AnimationForLogin, AnimationTB } from "../elements/Animation";
import Loading from "../elements/Loading";
import SpeechBubble from "../elements/SpeechBubble";
import Typography from "../elements/Typography";
import background from "../static/images/story/background.png";
import kakaoLoginButton from "../static/images/story/kakaoLoginButton.png";
import loginDescribe from "../static/images/story/loginDescribe.png";
import logo from "../static/images/story/logo.png";
import background1 from "../static/images/story/storyBackground1.png";
import background2 from "../static/images/story/storyBackground2.png";
import background2_2 from "../static/images/story/storyBackground2_2.png";
import background3 from "../static/images/story/storyBackground3.png";
import background4 from "../static/images/story/storyBackground4.png";
import story from "../static/strings/story";
import { axiosUrl } from "../static/url/axiosSrc";

const Story = () => {
  const [storyState, setStoryState] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const getStory = (num, time1, color, time2) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          alignItems: "center",
          marginTop: "15%",
          marginLeft: "10%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typing
            Tag="div"
            speed={30}
            preDelay={0}
            fixedWidth
            style={{
              color: color ? color : "black",
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
            speed={30}
            preDelay={time1}
            fixedWidth
            style={{
              color: color ? color : "black",
              fontSize: "23px",
              lineHeight: "34px",
              fontWeight: "700",
              wordBreak: "keep-all",
            }}
          >
            {story[num][1]}
          </Typing>
          {story[num][2] && (
            <Typing
              Tag="div"
              speed={30}
              preDelay={time2}
              fixedWidth
              style={{
                color: color ? color : "black",
                fontSize: "23px",
                lineHeight: "34px",
                fontWeight: "700",
                wordBreak: "keep-all",
              }}
            >
              {story[num][2]}
            </Typing>
          )}
        </div>
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
            speed={40}
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
          <img src={background1} style={{ position: "absolute", width: "100%" }} />
          {getStory("num2", 1000)}
          <SpeechBubble position="absolute" left="5%" bottom="19%" width="50%">
            하암-
          </SpeechBubble>
        </Container>
      )}
      {storyState == 2 && (
        <Container>
          <img src={background2_2} style={{ position: "absolute", width: "100%" }} />
          {getStory("num3", 1000, "white", 2500)}
          <AnimationBig src={background2} style={{ position: "absolute", width: "190%", left: "-45%", bottom: 0 }} />
          <SpeechBubble position="absolute" right="-5%" top="20%" width="50%">
            어라?
          </SpeechBubble>
        </Container>
      )}
      {storyState == 3 && (
        <Container>
          <img src={background3} style={{ position: "absolute", width: "100%" }} />
          {getStory("num4", 900)}
        </Container>
      )}
      {storyState == 4 && (
        <Container>
          <img src={background2_2} style={{ position: "absolute", width: "100%" }} />
          {getStory("num5", 2500, "white")}
          <AnimationTB src={background4} />
          <SpeechBubble position="absolute" left="5%" top="20%" width="65%" height="22%">
            {"이 녀석들 어디에 숨어있는거야?\n반드시 찾고 말겠어!"}
          </SpeechBubble>
        </Container>
      )}
      {storyState == 5 && (
        <Container style={{ backgroundColor: "#15966D" }}>
          <img
            src={background}
            style={{
              position: "absolute",
              width: "100%",
              top: "0%",
            }}
          />
          <img src={logo} style={{ position: "absolute", width: "70%", top: "10%", left: "15%" }} />
          <AnimationForLogin src={loginDescribe} />
          <a
            href={axiosUrl.createUser}
            onClick={() => {
              setLoading(true);
            }}
          >
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
          </a>
          {isLoading && <Loading />}
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
