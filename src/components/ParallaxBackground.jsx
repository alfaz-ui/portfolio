import React, { useEffect, useState } from 'react';

const ParallaxBackground = ({ children, className = '', speed = 0.5 }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offsetY * speed}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;