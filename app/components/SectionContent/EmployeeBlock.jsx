import { useState } from "react";
import { Box, Text, HStack, VStack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

const employees = [
    {
        id: 1,
        name: "Бибилов Иван",
        position: "директор",
        description: 'текст описания ',
        photoUrl: '/bibilov.jpg'
    },
    {
        id: 2,
        name: "Калишенко Анна",
        position: "менеджер проектов",
        description: 'текст описания ',
        photoUrl: '/kalishenko.jpg'
    },
    {
        id: 3,
        name: "Коваленко Кира",
        position: "начный сотрудник",
        description: 'текст описания ',
        photoUrl: '/kovalenko.jpg'
    },
    {
        id: 4,
        name: "Лавров Дмитрий",
        position: "программист",
        description: 'текст описания ',
        photoUrl: '/lavrov.jpg'
    },
    {
        id: 5,
        name: "Ольшевский Петр",
        position: "старший программист",
        description: 'текст описания ',
        photoUrl: '/olshevskii.jpg'
    },
    {
        id: 6,
        name: "Рогозов Михаил",
        position: "старший программист",
        description: 'текст описания ',
        photoUrl: '/rogozov.jpg'
    },
    {
        id: 7,
        name: "Шкода Мария",
        position: "менеджер по развитию",
        description: 'текст описания ',
        photoUrl: '/shkoda.jpg'
    },
]

const exEmployees = [
    'Аматуни Юлия',
    'Петров Андрей',
    'Усалко Иван',
]

const EmployeeBlock = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
    const Stack = useBreakpointValue({ base: VStack, lg: HStack });

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
    };
    return (
        <>
            <Stack
                justify="space-between"
                align="flex-start"
                width={'100%'}
                pl={10}
                mt={5}
                flexDirection={{ base: "column-reverse", lg: "row" }}
            >
                <Box zIndex={1000}>
                    {employees.map((employee) => (
                        <Box py={3} key={employee.id} >
                            <Text
                                onClick={() => handleEmployeeClick(employee)}
                                cursor="pointer"
                                fontWeight={selectedEmployee.id === employee.id ? "bold" : "normal"}
                                color={selectedEmployee.id === employee.id ? "#A8D4AF" : "#fff"}
                                variant="paragraph"
                            >
                                {employee.name}
                            </Text>
                            <Text variant="paragraph" fontSize="14px">
                                {employee.position}
                            </Text>
                        </Box>
                    ))}
                </Box>
                {employees.map((empl) => (
                    <Box
                        key={empl.id}
                        py={3}
                        // maxW="sm"
                        textAlign={'center'}
                        className={empl.id === selectedEmployee.id ? 'fade-in' : 'fade-out'}
                    >
                        <Image width={300} height={200} src={empl.photoUrl} alt={empl.name} />
                        <Box p="6">
                            <Text variant="paragraph" mb="2">
                                {empl.description}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </Stack>
            <Box pl={10} >
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
