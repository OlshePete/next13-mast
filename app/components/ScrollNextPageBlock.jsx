import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { BrandDownIcon } from "./CustomIcons";
import { useSectionInView } from './useSectionInView';
import { useScrollTracker } from './useScrollTracker';

function ScrollNextPageBlock() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const currentSection = useSectionInView();
  const isScrolling = useScrollTracker()
  const handleScrolldown = () => {
    const current = vh*(currentSection+1);
    console.log("####",current)
   window.scrollTo(0,current)
  }


  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  // const handleScrolldown = () => {
  //   const list = document.getElementsByClassName("section");
  //   // console.log("1",document.documentElement.scrollTop)
  //   // console.log("2", document.body.scrollTop)
  //   // console.log("vh",vh);
  //   // console.log("vw",vw);
  //   console.log(list)
  //   for (const el of list) {
  //     const {y} = el.getBoundingClientRect()
    
  //     if (y > 0 )   return console.log("####",y,vh) //return el.scrollIntoView()
  //   }
  //   // window.scrollTo(0,0)
  // }
  
  return (
      <IconButton
        onClick={handleScrolldown}
        className={isScrolling ? 'unviewed' : 'viewed'}
        variant="no_bg"
        aria-label="Scroll down"
        position="fixed"
        transition={"all 2s ease-in-out"}
        transform={['scale(0.8)','scale(0.8)','scale(1)']}
        top={"calc(100vh - 80px)"}
        left={['8px','16px','50px']}
        zIndex={200}
        icon={<BrandDownIcon />}
        // className={scrollY.get() >= 100 ? "unviewed" : ""}
      />
  )
}

export {ScrollNextPageBlock}