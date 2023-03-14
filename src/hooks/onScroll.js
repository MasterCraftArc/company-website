import { useEffect } from 'react';

function useOnScroll(listener) {
  useEffect(() => {
    listener();
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  });
}

export default useOnScroll;
