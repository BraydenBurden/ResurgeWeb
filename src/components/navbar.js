import { MenuOutlined, SettingOutlined } from "@ant-design/icons";
import { Box, Button, Divider, Grid, Stack, Switch } from "@mui/material";
import { Modal, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import "./sections/styles.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import darkLogo from "../images/ResurgeWeb Innovations-logos_black.png";
import lightLogo from "../images/ResurgeWeb Innovations-logos_white.png";

function useOutsideAlerterSettings(ref, specificButtonRef, setSettingsModal) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !(
          specificButtonRef.current &&
          specificButtonRef.current.contains(event.target)
        )
      ) {
        setSettingsModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setSettingsModal, specificButtonRef]);
}

function useOutsideAlerterMenu(ref, setMenuModal, specificButtonRef) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !(
          specificButtonRef.current &&
          specificButtonRef.current.contains(event.target)
        )
      ) {
        setMenuModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setMenuModal, specificButtonRef]);
}

const MenuModal = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerterMenu(wrapperRef, props.setMenuModal, props.buttonRef);

  return (
    <Grid
      container
      ref={wrapperRef}
      width={"10rem"}
      position={"fixed"}
      padding={1}
      top={"3rem"}
      right={"1.5rem"}
      backgroundColor={"primary.light"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"3px solid black"}
      borderRadius={"5px"}
      marginTop={"0.37rem"}
      zIndex={10000}
    >
      <Stack
        direction={"column"}
        xs={11}
        justifySelf={"right"}
        alignItems={"center"}
      >
        <HashLink smooth to="/#about" style={{ textDecoration: "none" }}>
          <Button
            style={{
              minWidth: "9.5rem",
              fontWeight: props.currentPage === "about" ? "800" : "500",
            }}
            variant={props.currentPage === "about" ? "contained" : "text"}
            color={props.currentPage === "about" ? "primary" : "secondary"}
            href="#about"
            onClick={() => {
              props.setCurrentPage("about");
              props.setMenuModal(false);
            }}
          >
            About
          </Button>
        </HashLink>
        <HashLink smooth to="/#showcase" style={{ textDecoration: "none" }}>
          <Button
            style={{
              minWidth: "9.5rem",
              fontWeight: props.currentPage === "showcase" ? "800" : "500",
            }}
            variant={props.currentPage === "showcase" ? "contained" : "text"}
            color={props.currentPage === "showcase" ? "primary" : "secondary"}
            href="#showcase"
            onClick={() => {
              props.setCurrentPage("showcase");
              props.setMenuModal(false);
            }}
          >
            Showcase
          </Button>
        </HashLink>
        <HashLink smooth to="/#plans" style={{ textDecoration: "none" }}>
          <Button
            style={{
              minWidth: "9.5rem",
              fontWeight: props.currentPage === "plans" ? "800" : "500",
            }}
            variant={props.currentPage === "plans" ? "contained" : "text"}
            color={props.currentPage === "plans" ? "primary" : "secondary"}
            href="#plans"
            onClick={() => {
              props.setCurrentPage("plans");
              props.setMenuModal(false);
            }}
          >
            Plans
          </Button>
        </HashLink>
        <Link
          to="/order/#orderForm"
          state={{ packageName: "Starter Package" }}
          style={{ textDecoration: "none" }}
        >
          <Button
            style={{
              minWidth: "9.5rem",
              fontWeight: props.currentPage === "order" ? "800" : "500",
            }}
            variant={props.currentPage === "order" ? "contained" : "text"}
            color={props.currentPage === "order" ? "primary" : "secondary"}
            href="#order"
            onClick={(e) => {
              props.setCurrentPage("order");
              props.setMenuModal(false);
            }}
          >
            Order
          </Button>
        </Link>
        <Link to="/contact/#contactForm" style={{ textDecoration: "none" }}>
          <Button
            style={{
              minWidth: "9.5rem",
              fontWeight: props.currentPage === "contact" ? "800" : "500",
            }}
            variant={props.currentPage === "contact" ? "contained" : "text"}
            color={props.currentPage === "contact" ? "primary" : "secondary"}
            href="#contact"
            onClick={() => {
              props.setCurrentPage("contact");
              props.setMenuModal(false);
            }}
          >
            Contact Us
          </Button>
        </Link>

        <Button
          style={{
            minWidth: "9.5rem",
            fontWeight: props.mobileSettingModal ? "800" : "500",
          }}
          variant={props.mobileSettingModal ? "contained" : "text"}
          color={props.mobileSettingModal ? "primary" : "secondary"}
          onClick={() => {
            props.setMobileSettingsModal(!props.mobileSettingModal);
            props.setMenuModal(false);
          }}
        >
          Settings
        </Button>
      </Stack>
    </Grid>
  );
};

const SettingsMenu = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerterSettings(
    wrapperRef,
    props.buttonRef,
    props.setSettingsModal
  );

  return (
    <Grid
      container
      ref={wrapperRef}
      width={"10rem"}
      position={"fixed"}
      padding={1}
      top={"3rem"}
      right={"1.5rem"}
      backgroundColor={"primary.light"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"3px solid black"}
      borderRadius={"5px"}
      marginTop={"0.37rem"}
      zIndex={10000}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {props.darkMode ? (
          <label className="switchLabel" htmlFor="modeSwitch">
            Light Mode
          </label>
        ) : (
          <label className="switchLabel" htmlFor="modeSwitch">
            Dark Mode
          </label>
        )}
        <Switch
          id="modeSwitch"
          defaultChecked
          color="secondary"
          onChange={(e) => {
            props.setDarkMode(!props.darkMode);
          }}
        />
      </Stack>
    </Grid>
  );
};

const NavBar = (props) => {
  const [settingsModal, setSettingsModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [mobileSettingModal, setMobileSettingsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const settingButton = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    if (!props.mobileView && !mobileSettingModal) {
      if (window.location.href.includes("contact")) {
        console.log(window.location.href);
        console.log("#contact in hred");
      } else if (window.location.href.includes("order")) {
        console.log(window.location.href);
        console.log("order in href");
      }
      setMenuModal(false);
    } else if (props.mobileView && settingsModal) {
      setSettingsModal(false);
    } else if (!props.mobileView && mobileSettingModal) {
      setMenuModal(false);
      setMobileSettingsModal(false);
    }
  }, [props.mobileView, mobileSettingModal, settingsModal]);

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.includes("contact")
      ? "contact"
      : location.pathname.includes("order")
      ? "order"
      : location.hash;

    setCurrentPage(
      currentPath.includes("about")
        ? "about"
        : currentPath.includes("showcase")
        ? "showcase"
        : currentPath.includes("plans")
        ? "plans"
        : currentPath.includes("order")
        ? "order"
        : currentPath.includes("contact")
        ? "contact"
        : "about"
    );
  }, [location.pathname, location.hash]);

  // Intersection Observer
  const observeElement = (elementId, callback) => {
    const element = document.getElementById(elementId);

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          callback(elementId);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
  };

  useEffect(() => {
    observeElement("about", setCurrentPage);
    observeElement("showcase", setCurrentPage);
    observeElement("plans", setCurrentPage);
  }, []);

  console.log(currentPage);

  return (
    <>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        width={"100vw"}
        justifyContent={"space-between"}
        backgroundColor="primary.main"
        padding={"0rem 2rem 0rem 2rem"}
        zIndex={10000}
        borderBottom={"3px solid black"}
        position={"fixed"}
      >
        <Grid item xs={!props.justLogo ? 4 : 1} style={{ cursor: "pointer" }}>
          <HashLink style={{ textDecoration: "none" }} smooth to="/#about">
            <Stack direction={"row"} alignItems={"center"}>
              <Box
                className="darkLogo"
                component={"img"}
                alt="darkLogo"
                src={props.darkMode ? lightLogo : darkLogo}
                height={"5rem"}
                width={"fit-content"}
              />
              {!props.justLogo && (
                <Typography id="resurge" style={{ fontSize: "1.5rem" }}>
                  ResurgeWeb Innovations
                </Typography>
              )}
            </Stack>
          </HashLink>
        </Grid>
        {!props.mobileView ? (
          <Stack
            direction={"row"}
            xs={11}
            justifySelf={"right"}
            alignItems={"center"}
          >
            <HashLink smooth to="/#about" style={{ textDecoration: "none" }}>
              <Button
                variant={currentPage === "about" ? "contained" : "text"}
                color={currentPage === "about" ? "primary" : "secondary"}
                // href="#about"
                onClick={(e) => {
                  setCurrentPage("about");
                  console.log(currentPage);
                }}
                style={{
                  fontWeight: currentPage === "about" ? "800" : "500",
                }}
              >
                About
              </Button>
            </HashLink>
            <HashLink smooth to="/#showcase" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  fontWeight: currentPage === "showcase" ? "800" : "500",
                }}
                variant={currentPage === "showcase" ? "contained" : "text"}
                color={currentPage === "showcase" ? "primary" : "secondary"}
                // href="#showcase"
                onClick={(e) => {
                  setCurrentPage("showcase");
                  console.log(currentPage);
                }}
              >
                Showcase
              </Button>
            </HashLink>
            <HashLink smooth to="/#plans" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  fontWeight: currentPage === "plans" ? "800" : "500",
                }}
                variant={currentPage === "plans" ? "contained" : "text"}
                color={currentPage === "plans" ? "primary" : "secondary"}
                onClick={(e) => {
                  setCurrentPage("plans");
                  console.log(currentPage);
                }}
              >
                Plans
              </Button>
            </HashLink>
            <Link
              to="/order/#orderForm"
              state={{ packageName: "Starter Package" }}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  fontWeight: currentPage === "order" ? "800" : "500",
                }}
                variant={currentPage === "order" ? "contained" : "text"}
                color={currentPage === "order" ? "primary" : "secondary"}
                href="#order"
                onClick={(e) => {
                  setCurrentPage("order");
                  console.log(currentPage);
                }}
              >
                Order
              </Button>
            </Link>
            <Link to="/contact/#contactForm" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  fontWeight: currentPage === "contact" ? "800" : "500",
                }}
                variant={currentPage === "contact" ? "contained" : "text"}
                color={currentPage === "contact" ? "primary" : "secondary"}
                href="#contact"
                onClick={(e) => {
                  setCurrentPage("contact");
                  console.log(currentPage);
                }}
              >
                Contact Us
              </Button>
            </Link>

            <Button
              style={{
                fontWeight: settingsModal ? "800" : "500",
              }}
              ref={settingButton}
              variant={settingsModal ? "contained" : "text"}
              color={settingsModal ? "primary" : "secondary"}
              onClick={() => {
                setSettingsModal(!settingsModal);
              }}
            >
              <SettingOutlined />
            </Button>
          </Stack>
        ) : (
          <Stack direction={"row"} xs={11} justifySelf={"right"}>
            <Button
              ref={menuButton}
              variant={menuModal ? "contained" : "text"}
              color={menuModal ? "primary" : "secondary"}
              onClick={() => {
                setMenuModal(!menuModal);
              }}
            >
              <MenuOutlined />
            </Button>
          </Stack>
        )}
      </Grid>
      {settingsModal && (
        <SettingsMenu
          buttonRef={settingButton}
          setSettingsModal={setSettingsModal}
          setDarkMode={props.setDarkMode}
          darkMode={props.darkMode}
        />
      )}

      {menuModal && (
        <MenuModal
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          buttonRef={menuButton}
          setMobileSettingsModal={setMobileSettingsModal}
          mobileSettingModal={mobileSettingModal}
          setMenuModal={setMenuModal}
        />
      )}

      <Modal
        className="testModal"
        destroyOnClose={true}
        width="300px"
        title="Settings"
        open={mobileSettingModal}
        onCancel={() => {
          setMobileSettingsModal(false);
        }}
        footer={false}
      >
        <Divider />
        <Stack direction={"row"} alignItems={"center"}>
          {props.darkMode ? (
            <label className="switchLabel" htmlFor="modeSwitch">
              Light Mode
            </label>
          ) : (
            <label className="switchLabel" htmlFor="modeSwitch">
              Dark Mode
            </label>
          )}
          <Switch
            id="modeSwitch"
            defaultChecked
            color="secondary"
            onChange={(e) => {
              props.setDarkMode(!props.darkMode);
            }}
          />
        </Stack>
      </Modal>
    </>
  );
};

export default NavBar;
