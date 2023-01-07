import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const HeaderImage = ({ name }) => {
  return (
    <div style={{ padding: "30px" }}>
      <StaticImage
        src={`../images/${name}.png`}
        alt={`${name}`}
        placeholder="blurred"
        style={{ gridArea: name }}
      />
    </div>
  );
};

export default HeaderImage;
