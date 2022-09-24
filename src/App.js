import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import styled from "styled-components";

function App() {
  return (
    <BackgroundStyle className="App">
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Container>
    </BackgroundStyle>
  );
}

const BackgroundStyle = styled.div`
  background-color: #dcdcdc;
`;

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
`;

export default App;
