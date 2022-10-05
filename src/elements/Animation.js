import styled, { keyframes } from "styled-components";

const moveLR = keyframes`{
  0% {
    margin-left: -1%;
  }
  50% {
    margin-left: 1%;
  }
  100%{
    margin-left: -1%;
  }
}`;

export const AnimationLR = styled.img`
  position: absolute;
  animation: ${moveLR} 2s linear infinite;
  z-index: 5;
  position: absolute;
  width: 80%;
  left: 13%;
  top: 23%;
`;

const moveBig = keyframes`{
  from {
    width: 100%;
    left: 0%;
  }
  to{
    width: 110%;
    left: -5%;
  }
}`;

export const AnimationBig = styled.img`
  position: absolute;
  animation: ${moveBig} 2s linear infinite;
  position: absolute;
  width: 100%;
  top: 30%;
  left: 0%;
`;

const opacity = keyframes`{
  from {
    opacity: 1
    }
  to {
    opacity: 0.2
  }
}`;

export const AnimationShine = styled.img`
  position: absolute;
  animation: ${opacity} 3s linear;
  z-index: 5;
  position: absolute;
  width: 80%;
  left: 13%;
  opacity: 0.2;
  top: 23%;
`;

const moveTB = keyframes`{
  0% {
    top: 30%;
  }
  50% {
    top: 33%;
  }
  100%{
    top: 30%;
  }
}`;

export const AnimationTB = styled.img`
  position: absolute;
  animation: ${moveTB} 2s linear;
  animation-iteration-count: 2;
  z-index: 5;
  position: absolute;
  width: 120%;
  left: -7%;
  top: 30%;
`;

const moveForLogin = keyframes`{
  0% {
    top: 20%;
  }
  50% {
    top: 22%;
  }
  100%{
    top: 20%;
  }
}`;

export const AnimationForLogin = styled.img`
  position: absolute;
  animation: ${moveForLogin} 2s linear infinite;
  z-index: 15;
  position: absolute;
  width: 55%;
  top: 80%;
  left: 22.5%;
`;

export const vibaration = keyframes`{
  from {
    transform: rotate(1deg);
  }
  to {
    transform: rotate(-1deg);
  }
}`;
