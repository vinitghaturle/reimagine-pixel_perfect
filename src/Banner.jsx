import React, { useState } from "react";
import UberSplineComponent from "./UberSplineComponent";

export default function Banner() {
  const [showMask, setShowMask] = useState(false);
  const [maskUrl, setMaskUrl] = useState("");

  // Called when Spline iframe is loaded
  const handleSplineLoaded = () => {
    setMaskUrl(`../src/load.gif?${Date.now()}`);
    setShowMask(true);
    setTimeout(() => setShowMask(false), 1500);
  };

  const maskStyle = showMask
    ? {
        maskImage: `url(${maskUrl})`,
        WebkitMaskImage: `url(${maskUrl})`,
        maskSize: "cover",
        WebkitMaskSize: "cover",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        transition: "mask-image 0.5s",
      }
    : {};

  return (
    <section
      className={`banner min-h-screen w-full${showMask ? " mask-active" : ""}`}
      style={maskStyle}
    >
      <div className="content w-full min-h-screen">
        <div className="title">
          <UberSplineComponent onSplineLoaded={handleSplineLoaded} />
        </div>
      </div>
    </section>
  );
}