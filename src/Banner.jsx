import React, { useState, useEffect } from "react";
import UberSplineComponent from "./UberSplineComponent";
import loadGif from "./load.gif";

export default function Banner() {
  const [showMask, setShowMask] = useState(true);
  const [maskUrl, setMaskUrl] = useState("");

  // Show GIF mask on every reload
  useEffect(() => {
    setMaskUrl(`${loadGif}?${Date.now()}`); // Force reload of GIF
    const timer = setTimeout(() => setShowMask(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
          <UberSplineComponent />
        </div>
      </div>
    </section>
  );
}