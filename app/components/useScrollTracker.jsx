import React, { useEffect, useState } from 'react';

const useScrollTracker = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
  let timeout
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
       timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolling;
};

export {useScrollTracker};