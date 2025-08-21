import React, { useState, useEffect } from "react";
import UberSplineComponent from "./UberSplineComponent";

export default function Banner() {
  const [showMask, setShowMask] = useState(true); // Start with mask showing
  const [maskUrl, setMaskUrl] = useState("");
  const [splineLoaded, setSplineLoaded] = useState(false);

  // Initial load effect
  useEffect(() => {
    setMaskUrl(`../src/load.gif?${Date.now()}`); // Force new GIF load on each mount
    const timer = setTimeout(() => {
      if (splineLoaded) {
        setShowMask(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [splineLoaded]);

  // Called when Spline iframe is loaded
  const handleSplineLoaded = () => {
    setSplineLoaded(true);
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