import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animation = inView ? 'animate-fadeInUp' : 'opacity-0 translate-y-8';

  return { ref, inView, animation };
};

export const useParallax = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return { ref, inView };
};