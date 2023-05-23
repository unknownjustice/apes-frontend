import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { getEventByIdAPI, isParticipatedAPI } from "./Service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Eventdiscription() {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({});
  const [isParticipated_, setIsParticipated] = useState(false);
  const { id } = useParams();
  const getEvent = async () => {
    const data = await getEventByIdAPI(id);
    setEventData(data);
  };
  const isParticipated = async () => {
    const data = await isParticipatedAPI({
      eventID: id,
      rollno: JSON.parse(localStorage.getItem("userData")).user.rollno,
    });
    setIsParticipated(data.participated);
  };
  useEffect(() => {
    isParticipated();
    getEvent();
  }, []);
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={require("../assets/img/hackathonbg.jpg")}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {eventData.Hackathonname}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              <b>Created At: </b>
              {eventData.createdAt}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{eventData.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Timing
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Entry Fees</ListItem>
                  <ListItem>Current pool</ListItem>{" "}
                </List>
                <List spacing={2}>
                  <ListItem>{eventData.entryfee}</ListItem>
                  <ListItem>{eventData.pool}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Button
            onClick={() => {
              !isParticipated_ && navigate(`/paymentpage/event/${id}`);
            }}
            disabled={isParticipated_}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            {isParticipated_ ? "Already Participated" : "Participate"}
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
