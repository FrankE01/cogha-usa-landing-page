import React from "react";
import styled from "styled-components";

const HoverText = styled.span`
  color: #666666;
  filter: drop-shadow(1px 4px 5px #ffffff);
  transition: color 600ms ease-out, filter 600ms ease-out;
  :hover {
    color: #000000;
    filter: drop-shadow(1px 4px 5px #666666);
    cursor: pointer;
  }
`;

const NavLink = ({ children }) => {
  return (
    <HoverText
      style={{
        fontFamily: "Inter var, Sans Serif",
        fontWeight: "600",
        fontSize: "16px",
      }}
    >
      {children}
    </HoverText>
  );
};

export default NavLink;
