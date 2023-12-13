import "./App.css";
import { useCallback, useEffect, useState } from "react";
import "./components/sections/styles.css";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./components/sections/contact";
import CustomWebsiteOrderForm from "./components/sections/CustomWebsiteOrderForm";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileView, setMobileView] = useState();

  const getScreenWidth = () => {
    return window.innerWidth;
  };

  const getScreenHeight = () => {
    return window.innerHeight;
  };

  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  const [screenHeight, setScreenHeight] = useState(getScreenHeight());

  const handleResize = useCallback(() => {
    if (window.innerWidth < 600) {
      setMobileView(true);
      setScreenHeight(getScreenHeight());
      setScreenWidth(getScreenWidth());
    } else {
      setMobileView(false);
      setScreenHeight(getScreenHeight());
      setScreenWidth(getScreenWidth());
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Call handleResize on the initial render
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              mobileView={mobileView}
              screenWidth={screenWidth}
              screenHeight={screenHeight}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        >
          <Route
            index
            element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="contact"
            element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/order"
            element={<CustomWebsiteOrderForm darkMode={darkMode} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
