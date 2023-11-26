import React, { memo } from "react";

const Loader = memo(function () {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="loadingio-spinner-rolling-d7zwg8l69zq"
      >
        <div className="ldio-5dkmmrhojl3">
          <div></div>
        </div>
      </div>
    </div>
  );
});

export default Loader;
