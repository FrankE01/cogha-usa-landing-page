import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeaderGrid = () => {
  return (
    <div
      style={{
        position: "relative",
        top: "70px",
        display: "grid",
        gridTemplateColumns: "repeat(6, 16.6666666666%)",
        gridTemplateRows: "40% 40%",
        gridTemplateAreas: `"image1 . middleText middleText . ." ". image2 middleText middleText . ."`,
      }}
      className="px-10"
    >
      <div style={{ padding: "2vw" }}>
        <StaticImage
          alt="image1"
          src="../images/image1.jpg"
          placeholder="blurred"
          style={{
            gridArea: "image1",
            height: "250px",
            borderRadius: "40px",
          }}
        />
      </div>
      <div></div>
      <div
        style={{
          fontFamily: "Macondo Regular",
          fontSize: "5vw",
          textAlign: "center",
          gridArea: "middleText",
        }}
      >
        CELEBRATION OF GHANAIAN ARTS
        <div className="mt-2">
          <p
            style={{
              fontFamily: "Quicksand var",
              fontSize: "1.5vw",
              color: "#888888",
            }}
          >
            SEE MORE
          </p>
          <div
            className="m-auto -mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              width: `4vw`,
            }}
          >
            <svg
              width="83"
              height="89"
              viewBox="0 0 83 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_7_28)">
                <circle cx="41.5001" cy="43.5" r="37.5" fill="white" />
              </g>
              <path
                d="M54.5001 44L42.0001 56.5L29.5001 44"
                stroke="#888888"
                stroke-width="2"
              />
              <path
                d="M54.5001 31.5L42.0001 44L29.5001 31.5"
                stroke="#888888"
                stroke-width="2"
              />
              <defs>
                <filter
                  id="filter0_dd_7_28"
                  x="6.10352e-05"
                  y="0"
                  width="83"
                  height="89"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_7_28"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_7_28"
                    result="effect2_dropShadow_7_28"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_7_28"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div></div>
      <div style={{ padding: `2vw` }}>
        <StaticImage
          alt="image2"
          src="../images/image2.jpg"
          placeholder="blurred"
          style={{
            gridArea: "image2",
            height: "250px",
            borderRadius: "40px",
          }}
        />
      </div>
      <div></div>
      <div style={{ padding: `2vw` }}>
        <StaticImage
          alt="image3"
          src="../images/image3.jpg"
          placeholder="blurred"
          style={{
            gridArea: "image3",
            height: "250px",
            borderRadius: "40px",
          }}
        />
      </div>
      <div style={{ padding: `2vw` }}>
        <StaticImage
          alt="image4"
          src="../images/image4.jpg"
          placeholder="blurred"
          style={{
            gridArea: "image4",
            height: "250px",
            borderRadius: "40px",
          }}
        />
      </div>
      <div></div>
    </div>
  );
};

export default HeaderGrid;
