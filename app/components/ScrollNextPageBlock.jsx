import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BrandDownIcon } from "./CustomIcons";
// import { useSectionInView } from "./useSectionInView";
import { useScrollTracker } from "./useScrollTracker";

function ScrollNextPageBlock() {
  const document = useRef(null)
  // const currentSection = useSectionInView();
  const isScrolling = useScrollTracker();
  const handleScrolldown = () => {
    window.scrollBy({ top: document?.current, behavior: "smooth", })
  };
  useEffect(() => {
    document.current = Math.max(
      document?.documentElement?.clientHeight || 0,
      window?.innerHeight || 0
    );
  }, []);

  return (
    <IconButton
      onClick={handleScrolldown}
      className={isScrolling ? "hide" : "show"}
      variant="no_bg"
      aria-label="Scroll down"
      position="fixed"
      transition={"all 2s ease-in-out"}
      transform={["scale(0.4)", "scale(0.5)", "scale(.6)"]}
      top={"calc(100vh - 90px)"}
      left={["8px", "16px", "24px"]}
      zIndex={200}
      icon={<BrandDownIcon />}
      _hover={{
        transform:'scale(.8)',
        animation:'none'
      }}
    />
  );
}

export { ScrollNextPageBlock };
