import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { StaticImage } from "gatsby-plugin-image";

const Gallery = () => {
  return (
    <div
      className="my-5"
      style={{
        // overflowX: "auto",
        // scrollBehavior: "smooth",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Scrollbar style={{ width: "90vw", height: "310px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          <StaticImage
            src="../images/image 13.png"
            alt="image 13"
            placeholder="blurred"
            style={{ height: "300px", width: "450px", flexShrink: "0" }}
          />
          <StaticImage
            src="../images/image 14.png"
            alt="image 14"
            placeholder="blurred"
            style={{ height: "300px", width: "250px", flexShrink: "0" }}
          />
          <StaticImage
            src="../images/image 15.png"
            alt="image 15"
            placeholder="blurred"
            style={{ height: "300px", width: "500px", flexShrink: "0" }}
          />
          <StaticImage
            src="../images/image 9.png"
            alt="image 9"
            placeholder="blurred"
            style={{ height: "300px", width: "200px", flexShrink: "0" }}
          />
          <StaticImage
            src="../images/image 10.png"
            alt="image 10"
            placeholder="blurred"
            style={{ height: "300px", width: "350px", flexShrink: "0" }}
          />
          <StaticImage
            src="../images/image 11.png"
            alt="image 11"
            placeholder="blurred"
            style={{ height: "300px", width: "410px", flexShrink: "0" }}
          />
          <StaticImage
            src="../images/image 12.png"
            alt="image 12"
            placeholder="blurred"
            style={{ height: "300px", width: "200px", flexShrink: "0" }}
          />
        </div>
      </Scrollbar>
    </div>
  );
};

export default Gallery;
