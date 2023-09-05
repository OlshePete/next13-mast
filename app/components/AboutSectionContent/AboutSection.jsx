import React from 'react';
import { Box, Heading, Text, Button, UnorderedList, ListItem, Image, Flex } from "@chakra-ui/react";
import EmployeeBlock from '../AboutSectionContent/EmployeeBlock'

const main_directions = [
  'разработка: прикладные инструменты, библиотеки и базы данных для исследователей в социогуманитарных областях',
  'образование: экспертное сопровождение студентов программы ПАНДАН, обеспечение практик для студентов технических специальностей из Computer Science Center, СПБГУ, ВШЭ и ИТМО',
  'исследования в областях обработки естественного языка и компьютерного зрения',
  'организация открытых мероприятий о цифровизации в социогуманитарных областях: лекций, семинаров, конференций, школ и хакатонов',
]

const AboutSection = () => {
  return (
    <Box className='section dark'>
      <Heading
        variant="sub_header"
        py={20}
      >
        О ЦЕНТРЕ
      </Heading>
      {/* <Flex flexDirection="row" justifyContent="space-around" >
        <Box maxW="sm" overflow="hidden" textAlign={'center'}>
          <Image src="/bibilov.jpg" alt={'test'} boxShadow="md" />
          <Box p="6">
            <Text fontWeight="bold" fontSize="xl" mb="2">
              Иван Бибилов
            </Text>
            <Text color="gray.600">Директор Прикладного центра машинного обучения, анализа данных и статистики</Text>
          </Box>
        </Box>
        <Box
          maxW="xl"
        >
          <Text py={20}>
            Прикладной центр машинного обучения, анализа данных и статистики (ПЦ МАСТ) был открыт в июле 2021 года как совместный проект Европейского университета и компании Яндекс.
          </Text>
          <Text>
            Мы применяем методы машинного обучения и анализа данных в гуманитарных и социальных науках.
          </Text>
        </Box>
      </Flex> */}
      <Box mb="50px">
        <Heading variant="sub_header" py={20} >
          Основные направления
        </Heading>
        <UnorderedList
          px={20}
          spacing={5}
          style={{
            color: "#fff",
            fontSize: "18px",
            textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
            lineHeight: "119.5%",
            letterSpacing: "2px",
          }}
        >
          {main_directions.map((direction, index) => (
            <ListItem key={index}>{direction}</ListItem>
          ))}
        </UnorderedList>
      </Box>
      <EmployeeBlock />
    </Box>
  );
};

export { AboutSection };
