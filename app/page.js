"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSectionContent/AboutSection";
import { ContactsSection } from "./components/ContactsSection";
import { ProductsSection } from "./components/ProductsSection";
import { StartSection } from "./components/StartSection";
import { ResearchesSection } from "./components/ResearchesSection";
import Header from "./components/Header";
import { ScrollNextPageBlock } from "./components/ScrollNextPageBlock";

export default function Home() {
  const [curPage, setCurPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);
  const [animTime] = useState(1000);
  const [scrolling, setScrolling] = useState(false);
  const [pgPrefix] = useState(".skw-page-");
  const [leftScroll, setLeftScroll] = useState(0);
  const [rightScroll, setRightScroll] = useState(0);
    console.log('NAV curPage state ', curPage);
    console.log('NAV scrolling', scrolling);

  const navigateUp = () => {
    if (curPage === 1) return;
    setCurPage(curPage - 1);
    // pagination();
  };

  const navigateDown = () => {
    if (curPage === numOfPages) return;
    setCurPage(curPage + 1);
    // pagination();
  };

  useEffect(() => {
    const handleScroll = (e) => {
      console.log(e.target.className);
      if (scrolling) return;
     
      const width = document.body.clientWidth;
      const x = e.clientX
      if (e.target.className.includes("auto-height")) {
         if (x > (width/2)) {
          // Прокрутка на правой части экрана
          if (e.deltaY < 0) {
            if(e.target.parentElement.scrollTop===0) navigateUp();
            console.log('Прокрутка на правой части экрана вверх off');
          } else {
            if(e.target.parentElement.scrollTop>=e.target.parentElement.scrollHeight-e.target.parentElement.clientHeight)navigateDown();
            console.log('Прокрутка на правой части экрана вниз off');
          }
      } else {
          // Прокрутка на левой части экрана
          console.log('Прокрутка на левой части экрана off');
          // Прокрутка на правой части экрана
          if (e.deltaY < 0) {
            if(e.target.parentElement.scrollTop===0) navigateUp();
            console.log('Прокрутка на левой части экрана вверх off');
          } else {
            if(e.target.parentElement.scrollTop>=e.target.parentElement.scrollHeight-e.target.parentElement.clientHeight)navigateDown();
            console.log('Прокрутка на левой части экрана вниз off');
          }
        }
      } else {
        
        if (e.deltaY < 0) {
          navigateUp();
        } else {
          navigateDown();
        }
        }
     
    };

    const handleKeyDown = (e) => {
      if (scrolling) return;
      if (e.key === "ArrowUp") {
        navigateUp();
      } else if (e.key === "ArrowDown") {
        navigateDown();
      }
    };

    // Подписка на событие прокрутки
    document.addEventListener("wheel", handleScroll);
    // Подписка на событие клавиатуры
    document.addEventListener("keydown", handleKeyDown);

    // Устанавливаем значения переменных и отписываемся от событий при размонтировании компонента
    return () => {
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ scrolling]);

  useEffect(() => {
    setNumOfPages(document.querySelectorAll(".skw-page").length);
  }, []);
  useEffect(() => {
    pagination()
  }, [curPage]);


  const pagination = () => {
    setScrolling(true);
    const currentPageElement = document.querySelector(pgPrefix + curPage);
    const previousPageElement = document.querySelector(pgPrefix + (curPage - 1));
    const nextPageElement = document.querySelector(pgPrefix + (curPage + 1));

    currentPageElement.classList.remove("inactive");
    currentPageElement.classList.add("active");

    if (previousPageElement) {
      previousPageElement.classList.add("inactive");
    }

    if (nextPageElement) {
      nextPageElement.classList.remove("active");
    }

  const leftContent = document.querySelector('.skw-page__half--left .skw-page__content');
  const rightContent = document.querySelector('.skw-page__half--right .skw-page__content');
  setLeftScroll(leftContent.scrollLeft);
  setRightScroll(rightContent.scrollLeft);

    setTimeout(() => {
      setScrolling(false);
    }, animTime);
  };


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Прикладной центр МАСТ</title>
      </Head>
      <div className="skw-pages">
        <div className="skw-page skw-page-1 active">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">Прикладной центр машинного обучения, анализа данных и статистики</h2></div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-2">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">Исследования</h2>
                <p className="skw-page__description">
                  
                </p>
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content auto-height"> 
               {
                [1,2,3,4,5,6].map(el=><div key={el} className="auto-height__block block">{el}</div>)
               }
              
               </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-3">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content  auto-height"> auto-height </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">Разработка</h2>
                <p className="skw-page__description">The end is near, I promise!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-4">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">Обучение</h2>
                <p className="skw-page__description">
                  Ok, ok, just one more scroll!
                </p>
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content auto-height"> auto-height</div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-5">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content"></div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <h2 className="skw-page__heading">Epic finale</h2>
                <p className="skw-page__description">Feel free to check</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Header/> */}
      {/* <StartSection /> */}
      {/*   <div className="section dark"><h1 className="white">1</h1></div>
      <div className="section dark"><h1 className="white">2</h1></div>
      <div className="section dark"><h1 className="white">3</h1></div>
      <div className="section dark"><h1 className="white">4</h1></div>
      <div className="section dark"><h1 className="white">5</h1></div>
      <div className="section dark"><h1 className="white">6</h1></div>*/}
      {/* <div
        className="section dark skw-page skw-page-1 active"
        style={{
          width: "100%",
        }}
      >
        <div
          className="skw-page__half skw-page__half--left"
          style={{ border: "2px solid green" }}
        >
          <div className="skw-page__skewed">
            <div className="skw-page__content">
              <h1 style={{ color: "white", fontSize: 42 }}>main header</h1>
            </div>
          </div>
        </div>
        <div
          className="skw-page__half skw-page__half--right"
          style={{ background: "red" }}
        >
          <div className="skw-page__skewed">
            <div className="skw-page__content">background</div>
          </div>
        </div>
      </div>
      <div
        className="section skw-page skw-page-2"
        style={{ background: "green" }}
      >
        <div className="skw-page__half skw-page__half--left">
          <div className="skw-page__skewed">
            <div className="skw-page__content">
        </div>
        </div>
        </div>
        <div className="skw-page__half skw-page__half--right">
          <div className="skw-page__skewed">
            <div className="skw-page__content">
          <h1 style={{ color: "red", fontSize: 42 }}>background</h1>
        </div>
        </div>
        </div>
      </div> */}
      {/* <StartSection  scrollY={winScrollY}/>
      <ProductsSection />
      <ResearchesSection />
      <AboutSection />
      <ContactsSection />
      <ScrollNextPageBlock/> */}
    </>
  );
}
