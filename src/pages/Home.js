import * as React from "react";
import {
  chakra,
  Stack,
  HStack,
  Text,
  Box,
  Flex,
  Link,
  Icon,
  useColorModeValue,
  Container,
  SimpleGrid,
  Card,
  VStack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// Here we have used react-icons package for the icons
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";
import { getallEventsAPI } from "./Service";
import { useNavigate } from "react-router-dom";

interface StatData {
  id: number;
  label: string;
  score: number;
  icon: any;
  percentage: string;
}

const statData: StatData[] = [
  {
    id: 1,
    label: "Total post reactions",
    score: 1730,
    icon: AiOutlineLike,
    percentage: "10%",
  },
  {
    id: 2,
    label: "Total post views",
    score: 3245,
    icon: AiOutlineEye,
    percentage: "30%",
  },
  {
    id: 3,
    label: "Total messages",
    score: 100,
    icon: HiOutlineMail,
    percentage: "30%",
  },
];

const StatsWithIcons = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5} mt={6} mb={4}>
        {statData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Home = () => {
  const [events, setEvents] = React.useState([]);
  const navigate = useNavigate();
  const getEvents = async () => {
    const data = await getallEventsAPI();
    setEvents(data);
  };
  React.useEffect(() => {
    getEvents();
  }, []);

  return (
    <Box w="100%">
      <Stack
        h={{ base: "auto", md: "auto" }}
        p={{ base: 5, md: 10 }}
        direction={{ base: "column", md: "row" }}
        bgImage={{
          base: "none",
          md: "url(https://mantine.dev/static/banner-3aed73d88ba2f8fca5f19f43eb8df554.webp)",
        }}
        backgroundSize="480px"
        backgroundPosition="center right"
        backgroundRepeat="no-repeat"
        minH={{ base: "unset", md: "450px" }}
      >
        <Stack
          pos="relative"
          zIndex={1}
          direction="column"
          justifyContent="center"
          spacing={6}
          maxW="550px"
        >
          <chakra.h1
            fontSize={{ base: "3xl", sm: "5xl" }}
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
          >
            Explore TemplatesKart <br />
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color={"gray.500"}
          >
            TemplatesKart is a set of more than 100 responsive components built
            with chakraUI. All components support dark/light color scheme and
            chakraUI theme customizations. TemplatesKart is free for everyone.
          </Text>
          <HStack spacing={{ base: 0, sm: 2 }} flexWrap="wrap">
            <chakra.button
              h={10}
              px={6}
              color="white"
              variant="solid"
              fontSize="md"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bg="blue.400"
              _hover={{ bg: "blue.600" }}
            >
              View Components
            </chakra.button>
            <Flex
              as={Link}
              justify="center"
              h={10}
              px={6}
              lineHeight={1.18}
              rounded="md"
              fontWeight="bold"
              alignItems="center"
              bg={"gray.500"}
              _hover={{ bg: "gray.500" }}
            >
              <Icon as={FaGithub} h={4} w={4} />
              <chakra.span ml={1}> Source code</chakra.span>
            </Flex>
          </HStack>
        </Stack>
      </Stack>
      <Box p="10" w="100%">
        <Flex mb={5} w="100%" justifyContent={"space-between"}>
          <Text color="black" fontSize="2xl" fontWeight="bold">
            Trending Events
          </Text>
          <Button
            onClick={() => {
              navigate("/events");
            }}
          >
            View All <BsArrowUpShort />
          </Button>
        </Flex>
        <Flex w="100%" justifyContent={"space-between"}>
          {events.map((data, index) => (
            <motion.div
              style={{
                width: "30%",
              }}
              whileHover={{ translateY: -5 }}
            >
              <Stack
                direction="column"
                rounded="md"
                boxShadow={"0 4px 6px rgba(160, 174, 192, 0.6)"}
                w="100%"
                textAlign="left"
                align="start"
                spacing={0}
                role="group"
                overflow="hidden"
              >
                <HStack py={6} px={5} spacing={4} bg={"gray.100"} w="100%">
                  <Flex
                    justify="center"
                    alignItems="center"
                    rounded="lg"
                    p={2}
                    bg="green.400"
                    position="relative"
                    w={12}
                    h={12}
                    overflow="hidden"
                    lineHeight={0}
                    boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                  >
                    <Icon as={data.icon} w={6} h={6} color="white" />
                  </Flex>
                  <VStack
                    onClick={() => navigate("/event/" + data._id)}
                    spacing={0}
                    align="start"
                    maxW="lg"
                    h="100%"
                  >
                    <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
                      {data.Hackathonname}
                    </Text>
                    <HStack spacing={2}>
                      <Text as="h2" fontSize="lg" fontWeight="extrabold">
                        {data.students.length}
                      </Text>
                      <Flex>
                        {Number(data.students.length) > 2 ? (
                          <Icon
                            as={BsArrowUpShort}
                            w={6}
                            h={6}
                            color="green.400"
                          />
                        ) : (
                          <Icon
                            as={BsArrowDownShort}
                            w={6}
                            h={6}
                            color="red.400"
                          />
                        )}
                        <Text as="h2" fontSize="md">
                          {data.students.length}
                        </Text>
                      </Flex>
                    </HStack>
                  </VStack>
                </HStack>
                <Flex py={3} px={5} d="none" _groupHover={{ d: "flex" }}>
                  <Link
                    onClick={() => navigate("/participents/" + data._id)}
                    fontSize="md"
                  >
                    Participents
                  </Link>
                </Flex>
              </Stack>
            </motion.div>
          ))}
        </Flex>
      </Box>
      <Box p="10" w="100%">
        <Flex mb={5} w="100%" justifyContent={"space-between"}>
          <Text color="black" fontSize="2xl" fontWeight="bold">
            Currently Running Agendas
          </Text>
          <Button>
            View All <BsArrowUpShort />
          </Button>
        </Flex>
        <Flex w="100%" justifyContent={"space-between"}>
          {statData.map((data, index) => (
            <motion.div
              style={{
                width: "30%",
              }}
              whileHover={{ translateY: -5 }}
            >
              <Stack
                direction="column"
                rounded="md"
                boxShadow={"0 4px 6px rgba(160, 174, 192, 0.6)"}
                w="100%"
                textAlign="left"
                align="start"
                spacing={0}
                role="group"
                overflow="hidden"
              >
                <HStack py={6} px={5} spacing={4} bg={"gray.100"} w="100%">
                  <Flex
                    justify="center"
                    alignItems="center"
                    rounded="lg"
                    p={2}
                    bg="green.400"
                    position="relative"
                    w={12}
                    h={12}
                    overflow="hidden"
                    lineHeight={0}
                    boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
                  >
                    <Icon as={data.icon} w={6} h={6} color="white" />
                  </Flex>
                  <VStack spacing={0} align="start" maxW="lg" h="100%">
                    <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
                      {data.label}
                    </Text>
                    <HStack spacing={2}>
                      <Text as="h2" fontSize="lg" fontWeight="extrabold">
                        {data.score}
                      </Text>
                      <Flex>
                        {Number(data.score) > 100 ? (
                          <Icon
                            as={BsArrowUpShort}
                            w={6}
                            h={6}
                            color="green.400"
                          />
                        ) : (
                          <Icon
                            as={BsArrowDownShort}
                            w={6}
                            h={6}
                            color="red.400"
                          />
                        )}
                        <Text as="h2" fontSize="md">
                          {data.percentage}
                        </Text>
                      </Flex>
                    </HStack>
                  </VStack>
                </HStack>
                <Flex py={3} px={5} d="none" _groupHover={{ d: "flex" }}>
                  <Link fontSize="md">View All</Link>
                </Flex>
              </Stack>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
