import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";
import NavLink from "./NavLink";
import { useScroll } from "./useScroll";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollDirection } = useScroll();
  const [pageOffset, setpageOffset] = useState(0);

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

  useEffect(() => {
    if (typeof window !== undefined) {
      setpageOffset(window.pageYOffset);
    }
  });

  return (
    <nav
      className="w-full py-5 px-10 mx-auto"
      style={
        scrollDirection === "down" && pageOffset > 60
          ? styles.active
          : pageOffset < 60
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
        <ScrollLink to="home" spy smooth activeClass="active">
          <Link to="/#home">
            <NavLink>Home</NavLink>
          </Link>
        </ScrollLink>
        <ScrollLink to="whatWeDo" spy smooth>
          <Link to="/#whatWeDo">
            <NavLink>What We Do</NavLink>
          </Link>
        </ScrollLink>
        <ScrollLink to="gallery" spy smooth>
          <Link to="/#gallery">
            <NavLink>Gallery</NavLink>
          </Link>
        </ScrollLink>
        <ScrollLink to="getInTouch" spy smooth>
          <Link to="/#getInTouch">
            <NavLink>Get In Touch</NavLink>
          </Link>
        </ScrollLink>
        <Link to="/articles">
          <NavLink>Articles</NavLink>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
