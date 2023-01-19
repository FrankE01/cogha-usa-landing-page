import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useScroll } from "./useScroll";
import "../styles/Sidebar.css";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const { scrollDirection } = useScroll();

  const styles = {
    active: {
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      border: "1px solid #eeeeee",
      borderTopStyle: "none",
      borderLeftStyle: "none",
      borderRightStyle: "none",
      position: "fixed",
      zIndex: "99",
      backgroundColor: "#ffffff66",

      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      border: "1px solid #eeeeee",
      borderTopStyle: "none",
      borderLeftStyle: "none",
      borderRightStyle: "none",
      position: "fixed",
      zIndex: "99",
      backgroundColor: "#ffffff66",

      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },

    top: {
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      border: "1px solid #eeeeee",
      borderTopStyle: "none",
      borderLeftStyle: "none",
      borderRightStyle: "none",
      position: "fixed",
      zIndex: "99",

      visibility: "visible",
      transition: "all 0.5s",
    },
  };

  return (
    <div
      style={
        scrollDirection === "down" && window.pageYOffset > 60
          ? styles.active
          : window.pageYOffset < 60
          ? styles.top
          : styles.hidden
      }
      className="w-full py-5 px-10 mx-auto"
      id="outer-container"
    >
      <div style={{ width: "120px" }}>
        <Link to="/">
          <StaticImage
            alt="logo"
            src="../images/cogha.png"
            placeholder="blurred"
          />
        </Link>
      </div>
      <Menu
        right
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        noOverlay
      >
        <div id="page-wrap">
          <SidebarLink>Home</SidebarLink>
          <SidebarLink>What We Do</SidebarLink>
          <SidebarLink>Gallery</SidebarLink>
          <SidebarLink>Get In Touch</SidebarLink>
        </div>
      </Menu>
    </div>
  );
};

export default Sidebar;
