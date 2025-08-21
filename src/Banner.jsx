import React, { useEffect, useState } from "react";
import "./App.css";
import UberSplineComponent from "./UberSplineComponent";
import UberSection from "./UberSection";


export default function Banner() {
  const [showMask, setShowMask] = useState(true);
  const [maskUrl, setMaskUrl] = useState("");

  useEffect(() => {
    // Force GIF reload by changing the URL each mount
    setMaskUrl(`../src/load.gif?${Date.now()}`);
    const timer = setTimeout(() => setShowMask(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Inline style for mask image
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