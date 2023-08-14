"use client";
import Head from "next/head";
import {useRouter} from "next/navigation";
import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactsSection } from "./components/ContactsSection";
import { ProductsSection } from "./components/ProductsSection";
import { StartSection } from "./components/StartSection";

export default function Home() {
  // const router = useRouter()
  // console.log(window.location.hash.replace("#", ""));
  // useEffect(() => {
  //   const hash = window?.location.hash.replace("#", "")
  //   if (hash) scrolltoHash(hash); else window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth',
  // });
  // }, [window])

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <StartSection />
      <ProductsSection />
      <AboutSection />
      <ContactsSection />
    </>
  );
}
