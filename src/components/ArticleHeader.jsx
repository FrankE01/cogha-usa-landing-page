import React from "react";

const ArticleHeader = () => {
  return (
    <div className="mx-auto" style={{ position: "relative", top: "120px" }}>
      <p
        style={{
          fontFamily: "Macondo Regular",
          fontSize: "4vw",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Articles
      </p>
      <p
        style={{
          fontFamily: "Inter var",
          fontSize: "1.5vw",
          textAlign: "center",
          fontWeight: "500",
          position: "relative",
          top: "-20px",
        }}
      >
        Read about our organization and events
      </p>
    </div>
  );
};

export default ArticleHeader;
