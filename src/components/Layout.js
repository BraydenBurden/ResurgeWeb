import { Outlet, useLocation } from "react-router-dom";
import "../App.css";
import { CssBaseline, Fab, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import NavBar from "../components/navbar";
import "../components/sections/styles.css";
import { ConfigProvider } from "antd";
import { UpOutlined } from "@ant-design/icons";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#30834c",
      light: "#599b6e",
    },
    secondary: {
      main: "#2d2d2d",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#30834c",
      light: "#599b6e",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#2d2d2d",
      paper: "#393939",
    },
    text: {
      primary: "#ffffff",
    },
    divider: "rgba(255,255,255,0.25)",
  },
});

const Layout = (props) => {
  const [mobileView, setMobileView] = useState();

  const antDarkTheme = {
    token: {
      colorPrimary: "#30834c",
      colorInfo: "#30834c",
      colorBgElevated: "#2d2d2d",
      colorText: "white",
    },
  };

  const antLightTheme = {
    token: {
      colorPrimary: "#30834c",
      colorInfo: "#30834c",
      colorBgElevated: "white",
      colorText: "black",
    },
  };

  const getScreenWidth = () => {
    return window.innerWidth;
  };

  const getScreenHeight = () => {
    return window.innerHeight;
  };

  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  const [screenHeight, setScreenHeight] = useState(getScreenHeight());

  const [justLogo, setjustLogo] = useState();

  const handleResize = useCallback(() => {
    if (window.innerWidth < 950) {
      setjustLogo(true);
    } else {
      setjustLogo(false);
    }
    if (window.innerWidth < 650) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const location = useLocation();

  return (
    <>
      <ConfigProvider theme={props.darkMode ? antDarkTheme : antLightTheme}>
        <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
          <CssBaseline>
            {console.log(
              (location.pathname.includes("order") ||
                location.pathname.includes("contact")) &&
                mobileView
            )}
            <Fab
              screenWidth={screenWidth}
              screenHeight={screenHeight}
              color="primary"
              size="medium"
              aria-label="scroll back to top"
              onClick={scrollToTop}
              style={{
                position: "fixed",
                bottom:
                  (location.pathname.includes("order") ||
                    location.pathname.includes("contact")) &&
                  mobileView
                    ? 70
                    : 16,
                right: 16,
              }}
            >
              <UpOutlined />
            </Fab>
            <NavBar
              setDarkMode={props.setDarkMode}
              darkMode={props.darkMode}
              mobileView={mobileView}
              justLogo={justLogo}
            />

            <Outlet />
          </CssBaseline>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default Layout;
