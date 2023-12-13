import "../App.css";
import { CssBaseline, Divider, Grid, Stack, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";
import About from "../components/sections/about";
import Team from "../components/sections/team";
import Showcase from "../components/sections/showcase";
import "../components/sections/styles.css";
import Order from "./sections/order";

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

// const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;

const Home = (props) => {
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

  //   useEffect(() => {
  //     console.log(document.getElementById("about"));
  //     console.log(document.getElementById("showcase"));
  //     // console.log(document.getElementById("about"));
  //   }, []);

  return (
    <ThemeProvider theme={props.darkMode ? darkTheme : lightTheme}>
      <CssBaseline>
        <Grid container>
          <Stack spacing={2}>
            <About
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              mobileView={mobileView}
            />
            <Divider />
            <Team screenHeight={screenHeight} screenWidth={screenWidth} />
            <Divider />
            <Showcase screenHeight={screenHeight} screenWidth={screenWidth} />
            <Divider />
            <Order darkMode={props.darkMode} />
          </Stack>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Home;
