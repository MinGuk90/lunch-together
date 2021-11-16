import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderBox></HeaderBox>;
};

const HeaderBox = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  height: 100px;
  background-color: #ffffff;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 75);
`;

export default Header;
