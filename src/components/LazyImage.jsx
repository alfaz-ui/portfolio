import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className = '', placeholder = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      
      {(!isInView || !isLoaded) && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-emerald-200 dark:from-purple-800 dark:to-emerald-800 animate-pulse">
          {placeholder || (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400 dark:text-gray-600">Loading...</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LazyImage;