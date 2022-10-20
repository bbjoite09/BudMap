import React, { useState } from "react";
import Typing from "react-kr-typing-anim";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AnimationBig, AnimationForLogin, AnimationTB } from "../elements/Animation";
import Typography from "../elements/Typography";
import background from "../static/images/story/background.png";
import loginDescribe from "../static/images/story/loginDescribe.png";
import startButton from "../static/images/story/startButton.png";
import logo from "../static/images/story/logo.png";
import speech1 from "../static/images/story/speech1.png";
import speech2 from "../static/images/story/speech2.png";
import speech3 from "../static/images/story/speech3.png";
import speech4 from "../static/images/story/speech4.png";
import background1 from "../static/images/story/storyBackground1.png";
import background2 from "../static/images/story/storyBackground2.png";
import background2_2 from "../static/images/story/storyBackground2_2.png";
import background3 from "../static/images/story/storyBackground3.png";
import background4 from "../static/images/story/storyBackground4.png";
import story from "../static/strings/story";

const Story = () => {
  const [storyState, setStoryState] = useState(0);

  const getStory = (num, time1, color, time2) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: "15%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
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
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: `${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? "-webkit-fill-available" : "100vh"}`,
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
          {getStory("num2", 300)}
          <img src={speech1} style={{ position: "absolute", width: "60%", left: 50, bottom: 120 }} />
        </Container>
      )}
      {storyState == 2 && (
        <Container>
          <img src={background2_2} style={{ position: "absolute", width: "100%" }} />
          {getStory("num3", 1000, "white", 1700)}
          <AnimationBig src={background2} style={{ position: "absolute", width: "190%", left: "-45%", bottom: 0 }} />
          <img src={speech2} style={{ position: "absolute", width: "70%", left: "15%", bottom: 100 }} />
        </Container>
      )}
      {storyState == 3 && (
        <Container>
          <img src={background3} style={{ position: "absolute", width: "100%" }} />
          {getStory("num4", 500)}
          <img src={speech3} style={{ position: "absolute", width: "30%", left: "18%", bottom: 150 }} />
        </Container>
      )}
      {storyState == 4 && (
        <Container>
          <img src={background2_2} style={{ position: "absolute", width: "100%" }} />
          {getStory("num5", 1000, "white")}
          <img src={speech4} style={{ position: "absolute", width: "70%", left: "5%", top: "20%", zIndex: 3 }} />
          <AnimationTB src={background4} />
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
          <div
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "40vh",
              alignItems: "center",
              justifyContent: "space-around",
              paddingTop: "10%",
            }}
          >
            <img src={logo} style={{ width: "70%" }} />
            <AnimationForLogin src={loginDescribe} />
            <Link to="/home" onClick={() => {}}>
              <img
                src={startButton}
                style={{
                  width: "70%",
                  zIndex: 10,
                }}
              />
            </Link>
          </div>
        </Container>
      )}
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? "-webkit-fill-available" : "100vh"};
  background-color: #83c4d6;
  display: flex;
  alignitems: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`;

export default Story;
