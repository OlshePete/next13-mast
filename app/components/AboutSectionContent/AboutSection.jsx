import React from 'react';
import { Box, Heading, Text, Button, UnorderedList, ListItem, Image, Flex } from "@chakra-ui/react";
import EmployeeBlock from '../AboutSectionContent/EmployeeBlock'

const AboutSection = () => {
  return (
    <Box className='section dark'>
      <Heading
        variant="sub_header"
        py={20}
        ml={40}
      >
        О ЦЕНТРЕ
      </Heading>
      <Flex flexDirection="row" justifyContent="space-around" >
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
      </Flex>
      <Box ml={40}>
        <Heading variant="sub_header" py={20} >
          Основные направления
        </Heading>
        <UnorderedList fontSize='2xl' spacing={5} maxW={'5xl'}>
          <ListItem>разработка: прикладные инструменты, библиотеки и базы данных для исследователей в социогуманитарных областях</ListItem>
          <ListItem>образование: экспертное сопровождение студентов программы ПАНДАН, обеспечение практик для студентов технических специальностей из Computer Science Center, СПБГУ, ВШЭ и ИТМО</ListItem>
          <ListItem>исследования в областях обработки естественного языка и компьютерного зрения</ListItem>
          <ListItem>организация открытых мероприятий о цифровизации в социогуманитарных областях: лекций, семинаров, конференций, школ и хакатонов</ListItem>
        </UnorderedList>
      </Box>
      <EmployeeBlock />
    </Box>
  );
};

export { AboutSection };
