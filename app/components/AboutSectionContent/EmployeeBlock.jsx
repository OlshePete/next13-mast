import { useState } from "react";
import { Box, Text, Image, Heading, HStack } from "@chakra-ui/react";
const employees = [
    {
        id: 1,
        name: "Бибилов Иван",
        position: "директор",
        photoUrl: '/bibilov.jpg'
    },
    {
        id: 2,
        name: "Калишенко Анна",
        position: "менеджер проектов",
        photoUrl: '/kalishenko.jpg'
    },
    {
        id: 3,
        name: "Коваленко Кира",
        position: "начный сотрудник",
        photoUrl: '/kovalenko.jpg'
    },
    {
        id: 4,
        name: "Лавров Дмитрий",
        position: "программист",
        photoUrl: '/lavrov.jpg'
    },
    {
        id: 5,
        name: "Ольшевский Петр",
        position: "старший программист",
        photoUrl: '/olshevskii.jpg'
    },
    {
        id: 6,
        name: "Рогозов Михаил",
        position: "старший программист",
        photoUrl: '/rogozov.jpg'
    },
    {
        id: 7,
        name: "Шкода Мария",
        position: "менеджер по развитию",
        photoUrl: '/shkoda.jpg'
    },
]

const employee_photos = [
    {
        id: 1,
        url: '/bibilov.jpg'
    },
    {
        id: 2,
        url: '/kalishenko.jpg'
    },
    {
        id: 3,
        url: '/kovalenko.jpg'
    },
    {
        id: 4,
        url: '/lavrov.jpg'
    },
    {
        id: 5,
        url: '/olshevskii.jpg'
    },
    {
        id: 6,
        url: '/rogozov.jpg'
    },
    {
        id: 7,
        url: '/shkoda.jpg'
    },
]
const exEmployees = [
    'Аматуни Юлия',
    'Петров Андрей',
    'Усалко Иван',
]
const EmployeeBlock = () => {
    const [selectedEmployee, setSelectedEmployee] = useState({
        id: 1,
        name: "Бибилов Иван",
        position: "директор",
        photoUrl: '/bibilov.jpg'
    },);

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
    };
    return (
        <>
            <Heading variant="sub_header" py={20} >
                Сотрудники центра
            </Heading>
            <HStack justify="space-between" align="flex-start" px={20}>
                <Box zIndex={1000}>
                    {employees.map((employee) => (
                        <Box py={3} key={employee.id} >
                            <Text
                                onClick={() => handleEmployeeClick(employee)}
                                cursor="pointer"
                                fontWeight={selectedEmployee.id === employee.id ? "bold" : "normal"}
                                color={selectedEmployee.id === employee.id ? "#A8D4AF" : "#fff"}
                                variant="paragraph"
                                fontSize="22px"
                            >
                                {employee.name}
                            </Text>
                            <Text variant="paragraph" fontSize="15px">
                                {employee.position}
                            </Text>
                        </Box>
                    ))}
                </Box>
                {employee_photos.map((photo) => (
                    <Box
                        key={photo.id}
                        maxW="sm"
                        textAlign={'center'}
                        className={photo.id === selectedEmployee.id ? 'fade-in' : 'fade-out'}
                    >
                        <Image src={photo.url} alt={photo.id} boxShadow="md" />
                        <Box p="6">
                            <Text variant="paragraph" mb="2">
                                Описание
                            </Text>
                        </Box>
                    </Box>
                ))}
            </HStack>
            <Box px={20} >
                <Text as="span" variant="paragraph"  >
                    В работе центра принимали участие
                </Text>
                {exEmployees.map((exEmployee, index) => (
                    <Text
                        as="span"
                        variant="paragraph"
                        key={index}
                    >
                        {index !== 0 && ','} {exEmployee}
                    </Text>

                ))}
            </Box>
        </>
    );
};

export default EmployeeBlock;
