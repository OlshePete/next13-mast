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

const researches = [
  {
    id: 1,
    title: "Сверхурочная работа в госзакупках России",
    description: "Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки».",
    img: "/research.png",
  },
  {
    id: 2,
    title: "Музейное наследие России",
    description: "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
    img: "/museum.png",
  },
  {
    id: 3,
    title: "Лексикон 10 века",
    description: "МузеоГраф позволяет осуществлять эффективных поиск среди нескольких десятков миллионов предметов, хранящихся в больших и малых музеях России.",
    img: "/research.png",
  },
  {
    id: 4,
    title: "Разработка методов и алгоритмов компьютерного зрения",
    description: "Разработка методов и алгоритмов компьютерного зрения",
    img: "/museum.png",
  },
];


export default function Home() {
  const [curPage, setCurPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(0);
  const [animTime] = useState(1000);
  const [scrolling, setScrolling] = useState(false);
  const [pgPrefix] = useState(".skw-page-");
  const [leftScroll, setLeftScroll] = useState(0);
  const [rightScroll, setRightScroll] = useState(0);

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
      console.log(typeof e.target.className);
      if (scrolling) return;
     
      const width = document.body.clientWidth;
      const x = e.clientX
      if (e.target.className?.includes("auto-height")) {
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
    const autoScrollElements = document.getElementsByClassName("auto-height");
    
    const handleScrollAutoHeightContent = (event) => {
      // Обработка события прокрутки
      console.log('Обработка события прокрутки',event.target.parentElement.parentElement);
    };

    Array.from(autoScrollElements).forEach((element) => {
      element.addEventListener("scroll", handleScrollAutoHeightContent);
    });

    return () => {
      Array.from(autoScrollElements).forEach((element) => {
        element.removeEventListener("scroll", handleScrollAutoHeightContent);
      });
    };
  }, []);

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

        <Header/>
      <div className="skw-pages">
        <div className="skw-page skw-page-1 active">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <BrandHeading>
                  Прикладной центр машинного обучения, анализа данных и статистики
                </BrandHeading>
                </div>
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
                <BrandHeading variant="section_header">Исследования</BrandHeading>
                <BrandText >обработка естественного языка и компьютерное зрение</BrandText>

              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content auto-height"> 
                 {
                  researches.map(el =>
                    <BlockWrapper el={el} length={researches.length} key={`${el.title}_${el.id}`} />
                  )
                }               
               </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-3">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content  auto-height"> 
               {
                [1,2,3].map(el=><div key={el} className="auto-height__block block">{el}</div>)
               }
                </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <BrandHeading variant="section_header" textAlign="right">Разработка</BrandHeading>
                <BrandText  textAlign="right"> для исследователей  <br/>в социогуманитарных областях</BrandText>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-4">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <BrandHeading variant="section_header" >Обучение</BrandHeading>
                <BrandText>экспертное сопровождение <br/>и  обеспечение практик</BrandText>
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content auto-height"> 
               {
                [1,2].map(el=><div key={el} className="auto-height__block block">{el}</div>)
               }
               </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-5">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <AboutCenter />
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
              <BrandHeading variant="section_header" textAlign="right">основные направления</BrandHeading>
              </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-6">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <BrandHeading variant="section_header">Сотрудники</BrandHeading>
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content auto-height"> 
               <EmployeeBlock />
               </div>
            </div>
          </div>
        </div>
        <div className="skw-page skw-page-7 ">
          <div className="skw-page__half skw-page__half--left">
            <div className="skw-page__skewed">
              <div className="skw-page__content ">
                <YandexMap/>
              </div>
            </div>
          </div>
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
              <BrandHeading variant="section_header" textAlign="right" mb="20px">Контакты</BrandHeading>
              <Contacts/>
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
