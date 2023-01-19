import React from "react";
import styled from "styled-components";

const HoverText = styled.span`
  display: block;
  margin: 20px;
  color: #eeeeee;
  filter: drop-shadow(1px 4px 5px #000000aa);
  transition: color 600ms ease-out, filter 600ms ease-out;
  :hover {
    color: #ffffff;
    filter: drop-shadow(1px 4px 5px #eeeeee);
    cursor: pointer;
  }
`;

const SidebarLink = ({ children }) => {
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

export default SidebarLink;
