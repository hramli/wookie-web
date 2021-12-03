import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  let location = useLocation();

  // Scroll to top whenever url changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (null);
}
