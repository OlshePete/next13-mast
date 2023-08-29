"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactsSection } from "./components/ContactsSection";
import { ProductsSection } from "./components/ProductsSection";
import { StartSection } from "./components/StartSection";
import { ResearchesSection } from "./components/ResearchesSection";
import Header from "./components/Header";
import { ScrollNextPageBlock } from "./components/ScrollNextPageBlock";

export default function Home() {
const [winScrollY, setWinScrollY] = useState(0);
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

const handleScroll = () => {
    setWinScrollY(window.scrollY);
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Прикладной центр МАСТ</title>
      </Head>
      <Header scrollY={winScrollY}/>
      <StartSection  scrollY={winScrollY}/>
      <ProductsSection />
      <ResearchesSection />
      <AboutSection />
      <ContactsSection />
      <ScrollNextPageBlock/>
    </>
  );
}
