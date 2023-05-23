import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import { fetchAgendaAPI } from "./Service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Agenda() {
  const navigate = useNavigate();
  const [agendaData, setAgendaData] = useState({});
  const { id } = useParams();

  const fetchAgenda = async () => {
    const data = await fetchAgendaAPI(id);
    setAgendaData(data.agenda[0]);
  };
  useEffect(() => {
    fetchAgenda();
  }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      py={12}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        boxShadow={"2xl"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        p={10}
        spacing={8}
        align={"center"}
      >
        <Stack align={"center"} spacing={2}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"6xl"}
            color={useColorModeValue("gray.800", "gray.200")}
          >
            Vote for Agenda
          </Heading>
          <Text fontSize={"4xl"} color={"gray.500"}>
            {agendaData.agenda}
          </Text>
          <Text fontSize={"lg"} color={"gray.500"}>
            <p>
              <b>Agenda Description:</b> {agendaData.description}
            </p>
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            <p>
              <b>Current Results:</b> {agendaData.finalResult ? "Yes" : "No"}
            </p>
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
          <Button
            onClick={() => {
              navigate(`/paymentpage/agenda/${id}`, {
                state: { ...agendaData, isVotedForYes: true },
              });
            }}
            bg={"green.600"}
            rounded={"full"}
            color={"white"}
            flex={"1 0 auto"}
            _hover={{ bg: "green.900" }}
            _focus={{ bg: "green.900" }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              navigate(`/paymentpage/agenda/${id}`, {
                state: { ...agendaData, isVotedForYes: false },
              });
            }}
            bg={"red.600"}
            rounded={"full"}
            color={"white"}
            flex={"1 0 auto"}
            _hover={{ bg: "red.900" }}
            _focus={{ bg: "red.900" }}
          >
            No
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
