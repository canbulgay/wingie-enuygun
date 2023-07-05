import Link from "next/link";
import { useAmp } from "next/amp";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Avatar,
} from "@chakra-ui/react";

export const config = { amp: "hybrid" };

export default function EmployeeList({ employees, handleVote }) {
  const isAmp = useAmp();
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th isNumeric>Age</Th>
              <Th>Job Title</Th>
              <Th>Vote Count</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((employee, index) => (
              <Tr key={employee.id}>
                <Td>
                  {isAmp ? (
                    <amp-img
                      src={employee.image}
                      alt={employee.firstName}
                      layout="responsive"
                      width={50}
                      height={50}
                    />
                  ) : (
                    <Avatar
                      src={employee.image}
                      alt={employee.firstName}
                      size="md"
                      rounded={"full"}
                    />
                  )}
                </Td>
                <Td>{employee.firstName}</Td>
                <Td>{employee.lastName}</Td>
                <Td isNumeric>{employee.age}</Td>
                <Td>{employee.jobTitle}</Td>
                <Td>{employee.voteCount}</Td>
                <Td>
                  <Button
                    colorScheme="whatsapp"
                    variant="outline"
                    mr={3}
                    onClick={() => handleVote(index)}
                  >
                    Vote
                  </Button>
                  <Link href={`/employees/${employee.id}`}>
                    <Button colorScheme="twitter" mr={3}>
                      View User
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
