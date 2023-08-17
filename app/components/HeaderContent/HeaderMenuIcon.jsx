'use client'
import { Stack,  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MenuIcon } from '../CustomIcons'

function HeaderMenuIcon({ isOpen, onToggle }) {
    const [position, setPosition] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // console.log(isOpen);
  const handleMenuClick = () => {
    // console.log(isOpen);
    onToggle();
  };

  const handleScroll = (event) => {
    //   console.log(`Прокрутили страницу`,event);

    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const total_pages = Math.ceil(pageHeight / windowHeight);
    const current_page = Math.ceil(scrollTop / windowHeight);
    // console.log(event)
    //           console.table({
    //         total_pages,
    //         pageHeight,
    // windowHeight,
    // scrollTop,
    //         current_page:Math.round(scrollTop / windowHeight),
    //     })
    if (currentPage !== +current_page) {
      setCurrentPage(current_page);
      //   const currentPage = Math.ceil(pageHeight / windowHeight);
      //   console.log(`Прокрутили страницу ${currentPage}`);
    }
  };
  useEffect(() => {
    console.log("currentPage", currentPage);
    setPosition(currentPage);
  }, [currentPage]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
   <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          onClick={handleMenuClick}
        >
          <MenuIcon className={`position${position}`} />
        </Stack>
  )
}

export {HeaderMenuIcon}