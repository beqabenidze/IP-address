import React, { useContext } from "react";
import bgMobile from "../assets/pattern-bg-mobile.png";
import bgDesktop from "../assets/pattern-bg-desktop.png";
import { Context } from "../App";
import styled from "styled-components";
import Input from "./input";

function Home() {
  const context = useContext(Context);
  return (
    <HomeWrapper>
      <img src={context.mobile ? bgMobile : bgDesktop} />
      <Input />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  img {
    position: absolute;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 190px;
  }
`;
