import React from "react";
import Typography from "./Typography";
import styled, { keyframes } from "styled-components";

const SpeechBubble = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, position, left, right, bottom, top } = props;
  return (
    <Animation
      id="bubble"
      style={{
        position,
        left,
        right,
        bottom,
        top,
      }}
    >
      <Typography type="speech">{children}</Typography>
    </Animation>
  );
};

const opacity = keyframes`{
  from {
    opacity: 0
    }
  to {
    opacity: 1
  }
}`;

const Animation = styled.div`
  position: absolute;
  animation: ${opacity} 2s linear;
  position: absolute;
  background-color: white;
  width: 55%;
  height: 20%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;

export default SpeechBubble;
