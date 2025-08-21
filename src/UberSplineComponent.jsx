import React, { useRef } from 'react';

const UberSplineComponent = ({ onSplineLoaded }) => {
  const iframeRef = useRef(null);

  // Forward wheel events to parent
  const handleWheel = (e) => {
    window.scrollBy({ top: e.deltaY, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white bg-[#02001b]">
      <div className="max-w-100vw max-h-100vh ">
        <main className="bg-[#02001b] min-h-100vh rounded-xl overflow-hidden shadow-2xl">
          <div className="relative block" style={{ position: "relative" }}>
            {/* Overlay div to capture scroll */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
                cursor: "default",
                background: "transparent",
              }}
              onWheel={handleWheel}
            />
            <iframe 
              ref={iframeRef}
              src='https://my.spline.design/claritystream-1HFcWDI96cHXt90ipWYvYZiz/'
              frameBorder='0'
              width='100%'
              height='500'
              title="Uber Spline 3D Model"
              className="w-full h-96 md:h-[500px] lg:h-[600px]"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "relative", zIndex: 1 }}
              onLoad={onSplineLoaded}
            />
          </div>
        </main>
        <div className="flex justify-center items-center ">
          <h1 className='text-[5rem] '>Go anywhere with Uber.</h1>
        </div>
      </div>
    </div>
  );
};

export default UberSplineComponent;