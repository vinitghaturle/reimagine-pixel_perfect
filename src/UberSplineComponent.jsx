import React, { useState } from 'react';

const UberSplineComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    
    <div className="min-h-screen text-white bg-[#02001b]">
      <div className="max-w-100vw max-h-100vh ">
        <main className=" bg-[#02001b] min-h-100vh rounded-xl overflow-hidden shadow-2xl">
          {/* Loading and Error States */}
          {isLoading && (
            <div className=" flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="w-16 h-16 border-4 border-blue-700 border-b-transparent rounded-full animate-spin-reverse absolute top-0 left-0"></div>
              </div>
              <p className="mt-4 text-lg">Loading 3D experience...</p>
            </div>
          )}

          {hasError && (
            <div className="h-96 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Failed to Load Content</h3>
              <p className="text-gray-400">There was an issue loading the 3D model. Please try again later.</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Spline Iframe */}
          <div className={`relative ${isLoading || hasError ? 'hidden' : 'block'}`} >
            <iframe 
              src='https://my.spline.design/claritystream-1HFcWDI96cHXt90ipWYvYZiz/'
              frameBorder='0'
              width='100%'
              height='500'
              title="Uber Spline 3D Model"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              className="w-full h-96 md:h-[500px] lg:h-[600px]"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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