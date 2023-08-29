"use client";
import Head from "next/head";
import {useRouter} from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSectionContent/AboutSection";
import { ContactsSection } from "./components/ContactsSection";
import { ProductsSection } from "./components/ProductsSection";
import { StartSection } from "./components/StartSection";
import { ResearchesSection } from "./components/ResearchesSection";
import Header from "./components/Header";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";

export default function Home() {
const [winScrollY, setWinScrollY] = useState(0);
  // const x = useMotionValue(scrollY)
//   const winRef = useRef(null)
  const { scrollYProgress, scrollY } = useScroll({
    offset: [0, 300],
  });
// useEffect(() => {
//   winRef.current = window
// }, [])

  console.log("%%%%%%%%%",scrollYProgress.get());
  console.log("%%%%%%%%% - ",scrollY?.get());

  // useMotionValueEvent(x, "animationStart", () => {
  //   console.log("animation started on x")
  // })
  
  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log("x changed to", latest)
  // })
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

const handleScroll = () => {
    setWinScrollY(window.scrollY);
  };

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header scrollY={winScrollY}/>
      <StartSection  scrollY={winScrollY}/>
      <ProductsSection />
      <ResearchesSection />
      <AboutSection />
      <ContactsSection />
    </>
  );
}
