import React, { useContext } from "react";
import bgMobile from "../assets/pattern-bg-mobile.png";
import bgDesktop from "../assets/pattern-bg-desktop.png";
import { Context } from "../App";

function Home() {
  const context = useContext(Context);

  return (
    <div>
      <img src={context.mobile ? bgMobile : bgDesktop} />
    </div>
  );
}

export default Home;
