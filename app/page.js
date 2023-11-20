"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Contacts } from "./components/SectionContent/Contacts";
import { ProductsSection } from "./components/ProductsSection";
import { StartSection } from "./components/StartSection";
import { ResearchesSection } from "./components/ResearchesSection";
import Header from "./components/Header";
import { ScrollNextPageBlock } from "./components/ScrollNextPageBlock";
import BrandHeading from "./components/ui/Typography/BrandHeading";
import BrandText from "./components/ui/Typography/BrandText";
import BlockWrapper from "./components/SectionContent/BlockWrapper";
import EmployeeBlock from "./components/SectionContent/EmployeeBlock";
import YandexMap from "./components/SectionContent/YandexMap";
import { AboutCenter } from "./components/SectionContent/AboutCenter";

const content =  {
  education:[],
  development:[],
  research :[
  {
    title: "Сверхурочная работа в госзакупках России",
    description: "Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки».",
    img: "/research.png",
  },
  {
    title: "Музейное наследие России",
    description: "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
    img: "/museum.png",
  },
  {
    title: "Лексикон 10 века",
    description: "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
    img: "/research.png",
  },
  {
    title: "Разработка методов и алгоритмов компьютерного зрения",
    description: "Разработка методов и алгоритмов компьютерного зрения",
    img: "/museum.png",
  },
]};


export default function Home() {
    
  // const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          // setTimeout( () => {
          //   setIsLoading(false);
          //   document.body.style.cursor = 'default'
          //   window.scrollTo(0,0);
          // }, 2000)
      }
    )()
  }, [])
  // const [curPage, setCurPage] = useState(1);
  // const [numOfPages, setNumOfPages] = useState(0);
  // const [animTime] = useState(1000);
  // const [scrolling, setScrolling] = useState(false);
  // const [pgPrefix] = useState(".skw-page-");
  // const [leftScroll, setLeftScroll] = useState(0);
  // const [rightScroll, setRightScroll] = useState(0);

  // const navigateUp = () => {
  //   if (curPage === 1) return;
  //   setCurPage(curPage - 1);
  //   // pagination();
  // };

  // const navigateDown = () => {
  //   if (curPage === numOfPages) return;
  //   setCurPage(curPage + 1);
  //   // pagination();
  // };

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     console.log(typeof e.target.className);
  //     if (scrolling) return;
     
  //     const width = document.body.clientWidth;
  //     const x = e.clientX
  //     if (e.target.className?.includes("auto-height")) {
  //        if (x > (width/2)) {
  //         // Прокрутка на правой части экрана
  //         if (e.deltaY < 0) {
  //           if(e.target.parentElement.scrollTop===0) navigateUp();
  //           console.log('Прокрутка на правой части экрана вверх off');
  //         } else {
  //           if(e.target.parentElement.scrollTop>=e.target.parentElement.scrollHeight-e.target.parentElement.clientHeight)navigateDown();
  //           console.log('Прокрутка на правой части экрана вниз off');
  //         }
  //     } else {
  //         // Прокрутка на левой части экрана
  //         console.log('Прокрутка на левой части экрана off');
  //         // Прокрутка на правой части экрана
  //         if (e.deltaY < 0) {
  //           if(e.target.parentElement.scrollTop===0) navigateUp();
  //           console.log('Прокрутка на левой части экрана вверх off');
  //         } else {
  //           if(e.target.parentElement.scrollTop>=e.target.parentElement.scrollHeight-e.target.parentElement.clientHeight)navigateDown();
  //           console.log('Прокрутка на левой части экрана вниз off');
  //         }
  //       }
  //     } else {
        
  //       if (e.deltaY < 0) {
  //         navigateUp();
  //       } else {
  //         navigateDown();
  //       }
  //       }
     
  //   };

  //   const handleKeyDown = (e) => {
  //     if (scrolling) return;
  //     if (e.key === "ArrowUp") {
  //       navigateUp();
  //     } else if (e.key === "ArrowDown") {
  //       navigateDown();
  //     }
  //   };

  //   // Подписка на событие прокрутки
  //   document.addEventListener("wheel", handleScroll);
  //   // Подписка на событие клавиатуры
  //   document.addEventListener("keydown", handleKeyDown);

  //   // Устанавливаем значения переменных и отписываемся от событий при размонтировании компонента
  //   return () => {
  //     document.removeEventListener("wheel", handleScroll);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [ scrolling]);


  // useEffect(() => {
  //   const autoScrollElements = document.getElementsByClassName("auto-height");
    
  //   const handleScrollAutoHeightContent = (event) => {
  //     // Обработка события прокрутки
  //     console.log('Обработка события прокрутки',event.target.parentElement.parentElement);
  //   };

  //   Array.from(autoScrollElements).forEach((element) => {
  //     element.addEventListener("scroll", handleScrollAutoHeightContent);
  //   });

  //   return () => {
  //     Array.from(autoScrollElements).forEach((element) => {
  //       element.removeEventListener("scroll", handleScrollAutoHeightContent);
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   setNumOfPages(document.querySelectorAll(".skw-page").length);
  // }, []);
  // useEffect(() => {
  //   pagination()
  // }, [curPage]);


  // const pagination = () => {
  //   setScrolling(true);
  //   const currentPageElement = document.querySelector(pgPrefix + curPage);
  //   const previousPageElement = document.querySelector(pgPrefix + (curPage - 1));
  //   const nextPageElement = document.querySelector(pgPrefix + (curPage + 1));

  //   currentPageElement.classList.remove("inactive");
  //   currentPageElement.classList.add("active");

  //   if (previousPageElement) {
  //     previousPageElement.classList.add("inactive");
  //   }

  //   if (nextPageElement) {
  //     nextPageElement.classList.remove("active");
  //   }

  // const leftContent = document.querySelector('.skw-page__half--left .skw-page__content');
  // const rightContent = document.querySelector('.skw-page__half--right .skw-page__content');
  // setLeftScroll(leftContent.scrollLeft);
  // setRightScroll(rightContent.scrollLeft);

  //   setTimeout(() => {
  //     setScrolling(false);
  //   }, animTime);
  // };


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Прикладной центр МАСТ</title>
      </Head>
      <main style={{display:'flex',flexDirection:'column',gap:0}} data-scroll data-scroll-to>
        <Header/>
        <StartSection/>
        <ResearchesSection list={content.research}/>
        <div style={{
          display:"flex",
          gap:'2rem',
          minWidth:'100vw',
          overflowX:'auto'
        }}>

        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        <div data-scroll-speed='0.3' style={{width:'280px',height:'280px', background:'red'}}></div>
        </div>
       
        {/* 
        <StartSection/> */}
      </main>
      
    </>
  );
}
