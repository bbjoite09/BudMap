import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import correct from "../static/images/modal/correct.json";

const CorrectEffect = () => {
  //lottie
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: correct,
    });
  }, []);
  return (
    <Container>
      <NoMore ref={likecontainer}></NoMore>
    </Container>
  );
};
const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  overflow: hidden;
`;

const NoMore = styled.div`
  width: 100%;
  height: 140%;
  margin: 0 auto;
  m
  overflow: hidden;
`;

export default CorrectEffect;
