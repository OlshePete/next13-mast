import { useState } from "react";
import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
const EmployeeBlock = () => {
    const employees = [
        {
            id: 1,
            name: "Кира Коваленко",
            position: "начный сотрудник",
            photoUrl: '/kovalenko.jpg'
        },
        {
            id: 2,
            name: "Петр Ольшевский",
            position: "старший программист",
            photoUrl: '/olshevskii.jpg'
        },
        {
            id: 3,
            name: "Михаил Рогозов",
            position: "старший программист",
            photoUrl: '/rogozov.jpg'
        },
    ]
    const exEmployees = [
        'Аматуни Юлия',
        'Усалко Иван',
        'Петров Андрей',
    ]
    const [selectedEmployee, setSelectedEmployee] = useState({
        id: 1,
        name: "Кира",
        photoUrl: '/kovalenko.jpg'
    });

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
    };
    return (
        <>
            <Heading variant="sub_header" py={20} ml={40}>
                Сотрудники центра
            </Heading>
            <Flex flexDirection="row" justifyContent="space-around">
                <Box>
                    {employees.map((employee) => (
                        <Box py={3}>
                            <Text
                                key={employee.id}
                                onClick={() => handleEmployeeClick(employee)}
                                cursor="pointer"
                                fontWeight={selectedEmployee.id === employee.id ? "bold" : "normal"}
                                fontSize={'2xl'}
                            >
                                {employee.name}
                            </Text>
                            <Text>
                                {employee.position}
                            </Text>
                        </Box>
                    ))}
                </Box>
                {selectedEmployee && (
                    <Box maxW="sm" overflow="hidden" textAlign={'center'}>
                        <Image src={selectedEmployee.photoUrl} alt={selectedEmployee.name} boxShadow="md" />
                        <Box p="6">
                            <Text fontWeight="bold" fontSize="xl" mb="2">
                                Описание
                            </Text>
                        </Box>
                    </Box>
                )}
            </Flex>
            <Heading as="h2" size="md" py={10} ml={40} >
                В работе центра принимали участие
            </Heading>
            <Box ml={40} pb={20}>
                {exEmployees.map((exEmployee, index) => (
                    <Text
                        key={index}
                        fontSize={'md'}
                        py='1'
                    >
                        {exEmployee}
                    </Text>

                ))}
            </Box>
        </>
    );
};

export default EmployeeBlock;
