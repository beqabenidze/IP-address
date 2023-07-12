import { useState, useEffect, createContext } from "react";
import GlobalStyles from "./styled-components/GlobalStyles";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

export const Context = createContext<any>(null);

function App() {
  const [mobile, setMobile] = useState(window.innerWidth > 375 ? false : true);

  useEffect(() => {
    const handleSize = () => {
      window.innerWidth > 375 ? setMobile(false) : setMobile(true);
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <Context.Provider value={{ mobile, setMobile }}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
