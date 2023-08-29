"use client";
import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MenuIcon } from "../CustomIcons";
import { useSectionInView } from "../useSectionInView";
function HeaderMenuIcon({ isOpen, onToggle }) {
  const [position, setPosition] = useState(0);
  const currentSection = useSectionInView();
  const handleMenuClick = () => {
    onToggle();
  };
  useEffect(() => {
    // console.log("currentSection",currentSection>=4?currentSection-4:currentSection );
    setPosition(currentSection > 4 ? currentSection - 3 : currentSection + 1);
  }, [currentSection]);

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
      onClick={handleMenuClick}
      transform={['scale(0.8)','scale(0.8)','scale(1)']}
    >
      <MenuIcon className={`position${position}`} />
    </Stack>
  );
}

export { HeaderMenuIcon };
