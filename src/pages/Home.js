import React from "react";
import styled from "styled-components";
import { Tab } from "../components/Tab";
import { Tabpac } from "../components/Tabpac";
const Home = () => {
  return (
    <CardWrap>
      {/* <Tab /> */}
      <Tabpac />
    </CardWrap>
  );
};

const CardWrap = styled.div`
  height: 2000px;
`;

export default Home;
