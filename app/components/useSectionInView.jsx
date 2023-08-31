import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function useSectionInView() {
  const [currentPage, setCurrentPage] = useState(0);
  const handleScroll = (event) => {
    //   console.log(`Прокрутили страницу`,event);
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const total_pages = Math.ceil(pageHeight / windowHeight);
    const current_page = Math.ceil(scrollTop / windowHeight);

    if (currentPage !== +current_page) {
      setCurrentPage(current_page);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return currentPage
}

export {useSectionInView}