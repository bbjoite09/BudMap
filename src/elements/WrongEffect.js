import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import wrong from "../static/images/modal/wrong.json";

const WrongEffect = () => {
  //lottie
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: wrong,
    });
  }, []);
  return (
    <Container style={{}}>
      <NoMore ref={likecontainer}></NoMore>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

const NoMore = styled.div`
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  height: 100%;
  margin: 0 auto;
  width: 88%;
  top: -17%;
`;

export default WrongEffect;
