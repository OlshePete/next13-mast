import { useState } from "react";
import { Box, Text, Image, Heading, HStack } from "@chakra-ui/react";
const employees = [
    {
        id: 1,
        name: "Бибилов Иван",
        position: "директор",
        description:'текст описания ',
        photoUrl: '/bibilov.jpg'
    },
    {
        id: 2,
        name: "Калишенко Анна",
        position: "менеджер проектов",
        description:'текст описания ',
        photoUrl: '/kalishenko.jpg'
    },
    {
        id: 3,
        name: "Коваленко Кира",
        position: "начный сотрудник",
        description:'текст описания ',
        photoUrl: '/kovalenko.jpg'
    },
    {
        id: 4,
        name: "Лавров Дмитрий",
        position: "программист",
        description:'текст описания ',
        photoUrl: '/lavrov.jpg'
    },
    {
        id: 5,
        name: "Ольшевский Петр",
        position: "старший программист",
        description:'текст описания ',
        photoUrl: '/olshevskii.jpg'
    },
    {
        id: 6,
        name: "Рогозов Михаил",
        position: "старший программист",
        description:'текст описания ',
        photoUrl: '/rogozov.jpg'
    },
    {
        id: 7,
        name: "Шкода Мария",
        position: "менеджер по развитию",
        description:'текст описания ',
        photoUrl: '/shkoda.jpg'
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
            <Heading  variant="sub_header" position={'relative'}  zIndex={20000}py={20} >
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
                {employees.map((empl) => (
                    <Box
                        key={empl.id}
                        maxW="sm"
                        textAlign={'center'}
                        className={empl.id === selectedEmployee.id ? 'fade-in' : 'fade-out'}
                    >
                        <Image src={empl.photoUrl} alt={empl.name} boxShadow="md" />
                        <Box p="6">
                            <Text variant="paragraph" mb="2">
                                {empl.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </HStack>
            <Box px={20} >
                <Text as="span" variant="paragraph"  >
                    В работе центра принимали участие {" "}
                </Text>
                    <Text
                        as="span"
                        variant="paragraph"
                    >
                       {exEmployees.join(", ")}
                    </Text>
            </Box>
        </>
    );
};

export default EmployeeBlock;
