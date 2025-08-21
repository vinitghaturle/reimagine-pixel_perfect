import React, { useRef } from 'react';

const UberSplineComponent = ({ onSplineLoaded }) => {
  const iframeRef = useRef(null);

  // Call onSplineLoaded when iframe loads
  const handleLoad = () => {
    if (onSplineLoaded) onSplineLoaded();
  };

  return (
    <div className="min-h-screen text-white bg-[#02001b]">
      <div className="max-w-100vw max-h-100vh ">
        <main className="bg-[#02001b] min-h-100vh rounded-xl overflow-hidden shadow-2xl">
          {/* Spline Iframe */}
          <div className="relative block">
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
              onLoad={handleLoad}
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