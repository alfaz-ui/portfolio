import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimationWrapper = ({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1,
  animation = 'fadeInUp' 
}) => {
  const { ref, inView } = useScrollAnimation(threshold);

  const getAnimationClass = () => {
    if (!inView) return 'opacity-0 translate-y-8';
    
    switch (animation) {
      case 'fadeInUp':
        return 'animate-fadeInUp';
      case 'fadeInLeft':
        return 'animate-fadeInLeft';
      case 'fadeInRight':
        return 'animate-fadeInRight';
      case 'zoomIn':
        return 'animate-zoomIn';
      default:
        return 'animate-fadeInUp';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;