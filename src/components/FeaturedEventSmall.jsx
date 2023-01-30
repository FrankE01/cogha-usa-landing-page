import React from "react";
import Timer from "./Timer";
import { StaticImage } from "gatsby-plugin-image";

const FeaturedEventSmall = () => {
  const deadline = "June 15, 2023 12:00:00";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70vw",
          height: "200px",
        }}
      >
        <StaticImage
          src="../images/event_image.jpg"
          alt="event_image"
          placeholder="blurred"
          style={{ height: "200px", borderRadius: "50px 50px 50px 50px" }}
        />
      </div>

      <div
        className="h-content"
        style={{
          width: "70vw",
          // height: "135vw",
          backgroundColor: "#000000",
          borderRadius: "40px 40px 40px 40px",
          padding: "5vw",
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          position: "relative",
          top: "-40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
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
                fontSize: "32px",
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
                fontSize: "16px",
              }}
            >
              #summerfest #coghafest
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
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
            <div>
              <Timer deadline={deadline} />
            </div>
            <hr style={{ color: "#aaaaaa", width: "200px" }} />

            <div
              className="mt-4"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    padding: "5px",
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
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    padding: "4px",
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
                  {deadline} GMT
                </p>
              </div>
            </div>
          </div>

          <button
            style={{
              backgroundColor: "#ffffff",
              width: "20vw",
              height: "5vw",
              padding: "5vw",
              borderRadius: "3vw",
              fontFamily: "Inter var",
              fontWeight: "700",
              fontSize: "4vw",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            R.S.V.P.
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventSmall;
