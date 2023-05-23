import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { getParticipentsAPI } from "./Service";
import { useParams } from "react-router-dom";

export default function Members() {
  const { id } = useParams();
  const [member, setMember] = React.useState([]);
  const getallmembers = async () => {
    const data = await getParticipentsAPI({
      eventID: id,
    });
    setMember(data);
  };
  React.useEffect(() => {
    getallmembers();
  }, []);

  return (
    <TableContainer p={10}>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          Participated in {member?.eventDetail?.Hackathonname}{" "}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Roll Number</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {member?.users?.map((item) => (
            <Tr>
              <Td>{item.name}</Td>
              <Td>{item.rollno} </Td>
              <Td>{item.email}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
