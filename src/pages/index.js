import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import NavLink from "../components/NavLink";
import headerbg from "../images/coghabg.png";
import Timer from "../components/Timer";

const Mainpage = () => {
  return (
    <main>
      <header
        style={{
          height: "650px",
          backgroundImage: `url(${headerbg})`,
          backgroundSize: `calc(100 * 1vw)`,
        }}
      >
        <nav
          className="w-full py-5 px-10 mx-auto"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            border: "1px solid #eeeeee",
            borderTopStyle: "none",
            borderLeftStyle: "none",
            borderRightStyle: "none",
          }}
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 16.6666666666%)",
            gridTemplateRows: "40% 40%",
            gridTemplateAreas: `"image1 . middleText middleText . ." ". image2 middleText middleText . ."`,
          }}
          className="px-10"
        >
          <div style={{ padding: `calc(2 * 1vw)` }}>
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
              fontSize: `calc(5 * 1vw)`,
              textAlign: "center",
              gridArea: "middleText",
            }}
          >
            CELEBRATION OF GHANAIAN ARTS
            <div className="mt-2">
              <p
                style={{
                  fontFamily: "Quicksand var",
                  fontSize: `calc(1.5 * 1vw)`,
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
                  width: `calc(4 * 1vw)`,
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
          <div style={{ padding: `calc(2 * 1vw)` }}>
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
          <div style={{ padding: `calc(2 * 1vw)` }}>
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
          <div style={{ padding: `calc(2 * 1vw)` }}>
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
      </header>
      <section className="w-full py-5 px-10 mx-auto">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="-mr-10"
            style={{
              width: "67%",
              height: "300px",
              backgroundColor: "#000000",
              borderRadius: "0 40px 40px 40px",
              padding: "50px",
              display: "flex",
              flexDirection: "row",
              gap: "40px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "20px" }}
              >
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7C1 4.17157 1 2.75736 1.87868 1.87868C2.75736 1 4.17157 1 7 1H11C13.8284 1 15.2426 1 16.1213 1.87868C17 2.75736 17 4.17157 17 7V13.8276C17 16.5109 17 17.8525 16.1557 18.2629C15.3114 18.6733 14.2565 17.8444 12.1465 16.1866L11.4713 15.656C10.2849 14.7239 9.69173 14.2578 9 14.2578C8.30827 14.2578 7.71509 14.7239 6.52871 15.656L5.85346 16.1866C3.74355 17.8444 2.68859 18.6733 1.84429 18.2629C1 17.8525 1 16.5109 1 13.8276V7Z"
                    fill="white"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "Inter var",
                    fontSize: "16",
                    fontWeight: "600",
                    color: "#ffffff",
                  }}
                >
                  Featured Event
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Quicksand var",
                    fontSize: "36px",
                    fontWeight: "600",
                    color: "#ffffff",
                  }}
                >
                  COGHA USA Summer Event
                </p>
                <p
                  style={{
                    color: "#ffffff",
                    fontFamily: "Quicksand var",
                    fontSize: "24px",
                  }}
                >
                  #summerfest #coghafest
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#ffffff",
                  width: "150px",
                  height: "50px",
                  padding: "20px",
                  borderRadius: "20px",
                  fontFamily: "Inter var",
                  fontWeight: "700",
                  fontSize: "16px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                R.S.V.P.
              </button>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <p
                style={{
                  color: "#ffffff",
                  fontFamily: "Inter var",
                  fontSize: "16",
                  fontWeight: "600",
                }}
              >
                Starts in...
              </p>
              <div className="-mt-5">
                <Timer />
                <div
                  className="-mt-5"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "306px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      color: "#aaaaaa",
                      fontFamily: "Quicksand var",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Months
                  </p>
                  <p
                    style={{
                      color: "#aaaaaa",
                      fontFamily: "Quicksand var",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Weeks
                  </p>
                  <p
                    style={{
                      color: "#aaaaaa",
                      fontFamily: "Quicksand var",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Days
                  </p>
                  <p
                    style={{
                      color: "#aaaaaa",
                      fontFamily: "Quicksand var",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Hours
                  </p>
                </div>
              </div>
              <hr style={{ color: "#aaaaaa", width: "320px" }} />

              <div
                className="mt-4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "30px",
                      padding: "4.5px",
                      border: "1px solid white",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.39804 16.804L8.6743 17.3366V17.3366L8.39804 16.804ZM7.60196 16.804L7.3257 17.3366L7.3257 17.3366L7.60196 16.804ZM14.4 8C14.4 10.2907 13.2328 12.1563 11.829 13.5722C10.4258 14.9876 8.83632 15.9007 8.12178 16.2713L8.6743 17.3366C9.44269 16.938 11.1542 15.9573 12.6812 14.4171C14.2077 12.8774 15.6 10.7256 15.6 8H14.4ZM8 1.6C11.5346 1.6 14.4 4.46538 14.4 8H15.6C15.6 3.80264 12.1974 0.4 8 0.4V1.6ZM1.6 8C1.6 4.46538 4.46538 1.6 8 1.6V0.4C3.80264 0.4 0.4 3.80264 0.4 8H1.6ZM7.87822 16.2713C7.16368 15.9007 5.57422 14.9876 4.17097 13.5722C2.76717 12.1563 1.6 10.2907 1.6 8H0.4C0.4 10.7256 1.79235 12.8774 3.31879 14.4171C4.8458 15.9573 6.55731 16.938 7.3257 17.3366L7.87822 16.2713ZM8.12178 16.2713C8.04213 16.3127 7.95787 16.3127 7.87822 16.2713L7.3257 17.3366C7.75178 17.5576 8.24822 17.5576 8.6743 17.3366L8.12178 16.2713ZM10.4 8C10.4 9.32548 9.32548 10.4 8 10.4V11.6C9.98823 11.6 11.6 9.98823 11.6 8H10.4ZM8 5.6C9.32548 5.6 10.4 6.67452 10.4 8H11.6C11.6 6.01178 9.98823 4.4 8 4.4V5.6ZM5.6 8C5.6 6.67452 6.67452 5.6 8 5.6V4.4C6.01178 4.4 4.4 6.01178 4.4 8H5.6ZM8 10.4C6.67452 10.4 5.6 9.32548 5.6 8H4.4C4.4 9.98823 6.01178 11.6 8 11.6V10.4Z"
                        fill="#EEEEEE"
                      />
                    </svg>
                  </div>
                  <p
                    style={{
                      color: "#eeeeee",
                      fontFamily: "Inter var",
                      fontSize: "16px",
                    }}
                  >
                    Alexandria, Virginia, USA.
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "30px",
                      padding: "3.5px",
                      border: "1px solid white",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="8.6"
                        stroke="white"
                        stroke-width="1.2"
                      />
                      <path
                        d="M14.5 10H10.25C10.1119 10 10 9.88807 10 9.75V6.5"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <p
                    style={{
                      color: "#eeeeee",
                      fontFamily: "Inter var",
                      fontSize: "16px",
                    }}
                  >
                    April 1, 2023 12:00 pm GMT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="-ml-10"
            style={{
              width: "31%",
              height: "250px",
            }}
          >
            <StaticImage
              src="../images/event_image.jpg"
              alt="event_image"
              placeholder="blurred"
              style={{ height: "250px", borderRadius: "50px 50px 0 50px" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export const Head = () => <title>COGHA USA</title>;

export default Mainpage;
