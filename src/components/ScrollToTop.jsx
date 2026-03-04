import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset scroll to (0,0) before Browser's next frame paint
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
