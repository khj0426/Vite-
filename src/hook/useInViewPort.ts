import { useState, useEffect, useCallback, RefObject } from 'react';

const useInViewPort = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit
) => {
  const [inViewport, setInViewport] = useState<boolean>(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewport(entry.isIntersecting);
        }
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    ref.current && observer.observe(ref.current);
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [ref.current, options]);

  return inViewport;
};

export default useInViewPort;
