import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import End from "./pages/End";
import Home from "./pages/home/Home";
import FirstSection from "./pages/section/FirstSection";
import SecondSection from "./pages/section/SecondSection";
import Story from "./pages/Story";

function App() {
  return (
    <BackgroundStyle className="App">
      <Container>
        <Routes>
          <Route path="/" exact element={<Story />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/firstSection" exact element={<FirstSection />} />
          <Route path="/secondSection" exact element={<SecondSection />} />
          <Route path="/end" exact element={<End />} />
        </Routes>
      </Container>
    </BackgroundStyle>
  );
}

const BackgroundStyle = styled.div`
  background-color: #e8f5fe;
  position: relative;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
`;

export default App;
