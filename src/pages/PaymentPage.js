import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { participateEventAPI, voteForAgendaAPI } from "./Service";
import { getEventByIdAPI } from "./Service";
import { fetchAgendaAPI } from "./Service";
import { toast } from "react-hot-toast";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { id, eventType } = useParams();
  const { state } = useLocation();

  const [eventData, setEventData] = useState({});
  const [deductionAmount, setDeductionAmount] = useState(0);
  const getEventDetails = async () => {
    const data = await getEventByIdAPI(id);

    setEventData(data);
  };
  const getAgendaDetails = async () => {
    const data = await fetchAgendaAPI(id);
    setEventData(data.agenda);
    setDeductionAmount(data.deductionAmount);
  };
  const participate = async () => {
    if (eventType == "event") {
      let rollno = JSON.parse(localStorage.getItem("userData")).user.rollno;
      try {
        const { response } = await participateEventAPI({
          eventID: id,
          rollno: rollno,
        });
        if (response) {
          toast.error("Already Participated");
        } else {
          toast.success("Participated Successfully");
          navigate("/");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      const { response } = await voteForAgendaAPI({
        agendaID: id,
        rollno: JSON.parse(localStorage.getItem("userData")).user.rollno,
        isVotedYes: state.isVotedForYes,
      });
      if (response) {
        toast.error("Already Voted");
      } else {
        toast.success("Voted  Successfully");
        navigate("/");
      }
    }
  };
  useEffect(() => {
    if (eventType == "event") {
      getEventDetails();
    } else {
      getAgendaDetails();
    }
  }, []);

  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            px={3}
            color={"green.500"}
            rounded={"full"}
          >
            Payment
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"6xl"} fontWeight={800}>
              {eventData.entryfee ? eventData.entryfee : deductionAmount}
            </Text>
            <Text color={"gray.500"}>Coins</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={WarningIcon} color="green.400" />
              {eventData.entryfee ? eventData.entryfee : deductionAmount} coins
              will be deducted from your account
            </ListItem>
          </List>

          <Button
            onClick={participate}
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
          >
            Pay Now
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
