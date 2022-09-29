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
  width: 110%;
  top: 15%;
`;

const moveBig = keyframes`{
  from {
    width: 170%;
    left: -35%;
  }
  to{
    width: 200%;
    left: -50%;
  }
}`;

export const AnimationBig = styled.img`
  position: absolute;
  animation: ${moveBig} 2s linear infinite;
  position: absolute;
  width: 200%;
  left: -50%;
  bottom: 0;
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
  animation: ${opacity} 2s linear;
  z-index: 5;
  position: absolute;
  width: 120%;
  left: -5%;
  opacity: 0.2;
  top: 15%;
`;

const moveTB = keyframes`{
  0% {
    top: 25%;
  }
  50% {
    top: 30%;
  }
  100%{
    top: 25%;
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
  top: 25%;
`;

const moveForLogin = keyframes`{
  0% {
    top: 65%;
  }
  50% {
    top: 70%;
  }
  100%{
    top: 65%;
  }
}`;

export const AnimationForLogin = styled.img`
  position: absolute;
  animation: ${moveForLogin} 2s linear infinite;
  z-index: 15;
  position: absolute;
  width: 70%;
  top: 80%;
  left: 15%;
`;
