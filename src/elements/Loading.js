import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import loading from "../static/images/loading.json";

const Loading = () => {
  //lottie
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loading,
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
  width: 120%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`;

const NoMore = styled.div`
  width: 30%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export default Loading;
