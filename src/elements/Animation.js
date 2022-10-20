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
  top: 35%;
  left: 0%;
`;

const opacity = keyframes`{
  from {
    opacity: 0.2
    }
  to {
    opacity: 1
  }
}`;

export const AnimationShine = styled.img`
  position: absolute;
  animation: ${opacity} 3s linear;
  z-index: 5;
  position: absolute;
  width: 80%;
  left: 13%;
  opacity: 1;
  top: 23%;
`;

const moveTB = keyframes`{
  0% {
    top: 40%;
  }
  50% {
    top: 43%;
  }
  100%{
    top: 40%;
  }
}`;

export const AnimationTB = styled.img`
  position: absolute;
  animation: ${moveTB} 2s linear;
  animation-iteration-count: 2;
  z-index: 5;
  position: absolute;
  width: 100%;
  top: 40%;
`;

const moveForLogin = keyframes`{
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px);
  }
}`;

export const AnimationForLogin = styled.img`
  animation: ${moveForLogin} 2s linear infinite;
  z-index: 15;
  width: 55%;
`;

export const vibaration = keyframes`{
  from {
    transform: rotate(1deg);
    background-color: white;
  }
  to {
    transform: rotate(-1deg);
    background-color: #f2f1ed;
  }
}`;

const typing = keyframes`{
  from { width: 0 }
  to { width: 100% }
}`;

export const TextStyle = styled.p`
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  animation: ${typing} 3.5s steps(40, end);
`;
