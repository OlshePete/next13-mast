"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Contacts } from "./components/SectionContent/Contacts";
import { ProductsSection } from "./components/ProductsSection";
import { StartSection } from "./components/StartSection";
import { ResearchesSection } from "./components/ResearchesSection";
import Header from "./components/Header";
import gsap from 'gsap'
import { ScrollNextPageBlock } from "./components/ScrollNextPageBlock";
import BrandHeading from "./components/ui/Typography/BrandHeading";
import BrandText from "./components/ui/Typography/BrandText";
import BlockWrapper from "./components/SectionContent/BlockWrapper";
import EmployeeBlock from "./components/SectionContent/EmployeeBlock";
import YandexMap from "./components/SectionContent/YandexMap";
import { AboutCenter } from "./components/SectionContent/AboutCenter";

const content = {
  education: [
    {
      title: "Сверхурочная работа в госзакупках России",
      description:
        "Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки».",
      img: "/research.png",
    },
    {
      title: "Музейное наследие России",
      description:
        "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
      img: "/museum.png",
    },
    {
      title: "Лексикон 10 века",
      description:
        "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
      img: "/research.png",
    },
    {
      title: "Разработка методов и алгоритмов компьютерного зрения",
      description: "Разработка методов и алгоритмов компьютерного зрения",
      img: "/museum.png",
    },
  ],
  development: [
    {
      title: "Сверхурочная работа в госзакупках России",
      description:
        "Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки».",
      img: "/research.png",
    },
    {
      title: "Музейное наследие России",
      description:
        "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
      img: "/museum.png",
    },
    {
      title: "Лексикон 10 века",
      description:
        "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
      img: "/research.png",
    },
    {
      title: "Разработка методов и алгоритмов компьютерного зрения",
      description: "Разработка методов и алгоритмов компьютерного зрения",
      img: "/museum.png",
    },
  ],
  research: [
    {
      title: "Сверхурочная работа в госзакупках России",
      description:
        "Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки».",
      img: "/research.png",
    },
    {
      title: "Музейное наследие России",
      description:
        "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
      img: "/museum.png",
    },
    {
      title: "Лексикон 10 века",
      description:
        "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
      img: "/research.png",
    },
    {
      title: "Разработка методов и алгоритмов компьютерного зрения",
      description: "Разработка методов и алгоритмов компьютерного зрения",
      img: "/museum.png",
    },
  ],
};

const filterByInView = (collection) => {
  let inViewportImages = []
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];

    // Проверяем, является ли элемент узлом и имеет ли метод getBoundingClientRect
    if (element instanceof Element && typeof element.getBoundingClientRect === 'function') {
      const rect = element.getBoundingClientRect();

      // Проверяем, пересекается ли элемент с видимой частью экрана
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      ) {
        inViewportImages.push(element);
      }
    }
  }
return inViewportImages
};
export default function Home() {
const container = useRef(null)
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.008;

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;
    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }
  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    const elements = filterByInView(document.getElementsByTagName('img'))
    elements.forEach((image,i)=> gsap.set(image,{x:`+=${xForce*(1/(i+1))}`,y:`+=${yForce*(1/(i+1))}`}))
    
    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Прикладной центр МАСТ</title>
      </Head>
      <main
        ref={container}
        onMouseMove={(e) => {manageMouseMove(e)}} 
        style={{ display: "flex", flexDirection: "column", gap: 0 }}
        data-scroll
        data-scroll-to
      >
        <Header />
        <StartSection />
        <ResearchesSection
          list={content.research}
          title="Исследования"
          subtitle="обработка естественного языка и компьютерное зрение"
        />
        <ResearchesSection
          list={content.development}
          title="Разработка"
          subtitle="для исследователей в социогуманитарных областях"
          isRight={true}
        />
        <ResearchesSection
          list={content.education}
          title="Обучение"
          subtitle="экспертное сопровождение и обеспечение практик"
        />
      </main>
    </>
  );
}
