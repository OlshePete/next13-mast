import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel"
const dataset = {
  исследования: [
    {
      title: "СВЕРХУРОЧНАЯ РАБОТА В ГОСЗАКУПКАХ РОССИИ",
      text: ["Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки»",],
      link: "https://ya.ru",
      image: "https://storage.yandexcloud.net/mast-lending/research.png",
    },
    {
      title: "СВЕРХУРОЧНАЯ РАБОТА В ГОСЗАКУПКАХ КАНАДЕ",
      text: ["Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки»",],
      link: "https://ya.ru",
      image: "https://storage.yandexcloud.net/mast-lending/research.png",
    },
    {
      title: "СВЕРХУРОЧНАЯ РАБОТА В ГОСЗАКУПКАХ ФРАНЦИИ",
      text: ["Исследование открытых данных о времени публикации контрактов в системе ЕИС «Закупки»",],
      link: "https://ya.ru",
      image: "https://storage.yandexcloud.net/mast-lending/research.png",
    },
  ],
  обучение: [
    {
      title: "Практика",
      text: ["Наши проекты и курсы интегрированы в актуальную научную работу исследователей.", "Домашние задания построены на материалах из социальных и гуманитарных областей: от открытых административных и опросных данных до эго-документов и изображений. ","Административных и опросных данных до эго-документов и изображений.",],
      link: "https://ya.ru",
      image: "https://storage.yandexcloud.net/mast-lending/research.png",
    },
    {
      title: "ПАНДАН",
      text: ["Совместная образовательная программа Европейского университета и Яндекса",],
      link: "https://ya.ru",
      image: "https://storage.yandexcloud.net/mast-lending/research.png",
    },
  ],
  разработка: [],
};
function ProductBlock({ index, item }) {
  return (
    <Box
      bg="brand.700"

      // border={"3px solid green"}
      zIndex={1000 + index}
      position={"sticky"}
      top={"50px"}
      h={"calc(100vh - 120px)"}
      id={item.href}
      py={2}
    >
            <Carousel posts={dataset[String(item.name).toLowerCase()]}/>
    </Box>
  );
}

export { ProductBlock };
