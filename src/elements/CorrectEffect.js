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
    <>
      <NoMore ref={likecontainer}></NoMore>
    </>
  );
};

const NoMore = styled.div`
  position: absolute;
  height: 100%;
  margin: 0 auto;
  top: 0;
  z-index: 20;
  overflow: hidden;
`;

export default CorrectEffect;
