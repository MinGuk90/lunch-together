import { current } from "immer";
import React, { useState } from "react";
import styled from "styled-components";

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width: 100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
  .focused {
    color: red;
  }
`;

export const Tabpac = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
        <div>
          <h1>{menuArr[currentTab].content}</h1>
        </div>
      </div>
    </>
  );
};
