import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Inter-VariableFont_slnt,wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Macondo-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="macondoFont"
    />,
    <link
      rel="preload"
      href="/fonts/Quicksand-VariableFont_wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="quicksandFont"
    />,
  ]);
};
