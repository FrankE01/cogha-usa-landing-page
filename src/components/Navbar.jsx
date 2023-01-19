import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import NavLink from "./NavLink";
import { useScroll } from "./useScroll";
import React from "react";

const Navbar = () => {
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
    <nav
      className="w-full py-5 px-10 mx-auto"
      style={
        scrollDirection === "down" && window.pageYOffset > 60
          ? styles.active
          : window.pageYOffset < 60
          ? styles.top
          : styles.hidden
      }
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
      <div
        className="flex"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "450px",
        }}
      >
        <NavLink>Home</NavLink>
        <NavLink>What We Do</NavLink>
        <NavLink>Gallery</NavLink>
        <NavLink>Get In Touch</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
