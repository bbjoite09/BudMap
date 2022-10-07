import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import button from "../static/images/button.json";

const ButtonEffect = () => {
  //lottie
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: button,
    });
  }, []);

  return (
    <Container style={{}}>
      <NoMore ref={likecontainer}></NoMore>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  overflow: hidden;
  border-radius: 30px 30px 0 0;
`;

const NoMore = styled.div`
  width: 150%;
  margin: 0 auto;
  overflow: hidden;
`;

export default ButtonEffect;
