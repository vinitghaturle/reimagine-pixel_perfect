import React, { useState, useEffect } from "react";
import UberSplineComponent from "./UberSplineComponent";
import loadGif from "./load.gif";

export default function Banner() {
  const [showMask, setShowMask] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);

  // Initial load effect
  useEffect(() => {
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
        maskImage: `url(${loadGif})`,
        WebkitMaskImage: `url(${loadGif})`,
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