import React from 'react';
import { UnorderedList, ListItem } from "@chakra-ui/react";

const main_directions = [
  'разработка: прикладные инструменты, библиотеки и базы данных для исследователей в социогуманитарных областях',
  'образование: экспертное сопровождение студентов программы ПАНДАН, обеспечение практик для студентов технических специальностей из Computer Science Center, СПБГУ, ВШЭ и ИТМО',
  'исследования в областях обработки естественного языка и компьютерного зрения',
  'организация открытых мероприятий о цифровизации в социогуманитарных областях: лекций, семинаров, конференций, школ и хакатонов',
]

const AboutCenter = () => {
  return (
    <UnorderedList
      px={10}
      spacing={5}
      style={{
        color: "#fff",
        fontSize: "18px",
        textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
        lineHeight: "119.5%",
        fontWeight: "500",
        letterSpacing: "2.64px",
      }}
    >
      {main_directions.map((direction, index) => (
        <ListItem key={index}>{direction}</ListItem>
      ))}
    </UnorderedList>
  );
};

export { AboutCenter };
