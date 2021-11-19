import React from "react";
import styled from "styled-components";
import { Tab } from "../components/Tab";
import { Tabpac } from "../components/Tabpac";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <CardWrap>
      {/* <Tab /> */}
      <Tabpac />
      <input />
      <Zoom>
        <Box />
        <Box />
        <Box />
      </Zoom>
      <Fade left>
        <Box />
        <Box />
        <Box />
        <Box />
      </Fade>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  height: 2000px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  margin: 500px;
`;
export default Home;
