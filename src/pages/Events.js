import React, { useEffect } from "react";
import { Fragment } from "react";
import {
  Container,
  Box,
  chakra,
  Flex,
  Stack,
  VStack,
  HStack,
  Grid,
  Icon,
  Divider,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { IconType } from "react-icons";
import { FaRegComment, FaRegHeart, FaRegEye } from "react-icons/fa";
import { getAllAgendaAPI, getallEventsAPI } from "./Service";
import { useNavigate } from "react-router-dom";
const articles: ArticleAttributes[] = [
  {
    title: "Hack1",
    link: "https://mahmad.me/blog/started-2022-by-updating-portfolio-website-1jde-temp-slug-4553258",
    created_at: "21 Jan 2022",
    meta: {
      views: 500,
    },
  },
  {
    title: "hack2",
    link: "https://mahmad.me/blog/create-professional-portfolio-website-with-nextjs-and-chakraui-4lkn",
    created_at: "20 Jun 2021",
    meta: {
      views: 300,
    },
  },
  {
    title: `Hack3`,
    link: "https://mahmad.me/blog/what-s-new-in-my-portfolio-websitea",
    created_at: "31 Sept 2022",
    meta: {
      views: 150,
    },
  },
];
export default function Events({ isAgenda = false }) {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState([]);
  const getEvents = async () => {
    var data = [];
    if (!isAgenda) {
      data = await getallEventsAPI();
    } else {
      data = await getAllAgendaAPI();
    }
    setEvents(data);
  };
  useEffect(() => {
    getEvents();
  }, []);
  const ArticleStat = ({ icon, value }: { icon: IconType, value: number }) => {
    return (
      <Flex p={1} alignItems="center">
        <Icon as={icon} w={5} h={5} mr={2} />
        <chakra.span> {value} </chakra.span>
      </Flex>
    );
  };

  const ArticleSettingLink = ({ label }: { label: string }) => {
    return (
      <chakra.p as={Link} _hover={{ bg: "gray.600" }} p={1} rounded="md">
        {label}
      </chakra.p>
    );
  };
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Flex justify="left" mb={3}>
        <chakra.h3 fontSize="2xl" fontWeight="bold" textAlign="center">
          {!isAgenda ? "Hackathons" : "Agendas"}
        </chakra.h3>
      </Flex>
      {isAgenda ? (
        <VStack
          border="1px solid"
          borderColor="gray.400"
          rounded="md"
          overflow="hidden"
          spacing={0}
        >
          {events.map((event, index) => (
            <Fragment key={index}>
              <Grid
                onClick={() => navigate("/agenda/" + event._id)}
                templateRows={{ base: "auto auto", md: "auto" }}
                w="100%"
                templateColumns={{ base: "unset", md: "4fr 2fr 2fr" }}
                p={{ base: 2, sm: 4 }}
                gap={3}
                alignItems="center"
                _hover={{ bg: "gray.600" }}
              >
                <Box gridColumnEnd={{ base: "span 2", md: "unset" }}>
                  <chakra.h3
                    as={Link}
                    // href={article.link}
                    isExternal
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {event.agenda}
                  </chakra.h3>
                  <chakra.p
                    fontWeight="medium"
                    fontSize="sm"
                    color={"gray.600"}
                  >
                    College ID: {event.collegeID}
                  </chakra.p>
                  <chakra.p
                    fontWeight="medium"
                    fontSize="sm"
                    color={"gray.600"}
                  >
                    Created On: {event.createdAt}
                  </chakra.p>
                  <chakra.p
                    fontWeight="medium"
                    fontSize="sm"
                    color={"gray.600"}
                  >
                    Branch Specific:{" "}
                    {event.isRestrictedToBranch
                      ? ArticleSettingLink({ label: "Yes" })
                      : ArticleSettingLink({ label: "No" })}
                  </chakra.p>
                  <chakra.p
                    fontWeight="medium"
                    fontSize="sm"
                    color={"gray.600"}
                  >
                    Class Specific:{" "}
                    {event.isRestrictedToClass
                      ? ArticleSettingLink({ label: "Yes" })
                      : ArticleSettingLink({ label: "No" })}
                  </chakra.p>
                </Box>

                <Stack
                  spacing={2}
                  direction="row"
                  fontSize={{ base: "sm", sm: "md" }}
                  justifySelf="flex-end"
                  alignItems="center"
                ></Stack>
              </Grid>
              {articles.length - 1 !== index && <Divider m={0} />}
            </Fragment>
          ))}
        </VStack>
      ) : (
        <VStack
          border="1px solid"
          borderColor="gray.400"
          rounded="md"
          overflow="hidden"
          spacing={0}
        >
          {events.map((event, index) => (
            <Fragment key={index}>
              <Grid
                onClick={() => navigate("/event/" + event._id)}
                templateRows={{ base: "auto auto", md: "auto" }}
                w="100%"
                templateColumns={{ base: "unset", md: "4fr 2fr 2fr" }}
                p={{ base: 2, sm: 4 }}
                gap={3}
                alignItems="center"
                _hover={{ bg: "gray.300" }}
              >
                <Box gridColumnEnd={{ base: "span 2", md: "unset" }}>
                  <chakra.h3
                    as={Link}
                    // href={article.link}
                    isExternal
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {event.Hackathonname}
                  </chakra.h3>
                  <chakra.p
                    fontWeight="medium"
                    fontSize="sm"
                    color={"gray.600"}
                  >
                    Created On: {event.createdAt}
                  </chakra.p>
                </Box>

                <Stack
                  spacing={2}
                  direction="row"
                  fontSize={{ base: "sm", sm: "md" }}
                  justifySelf="flex-end"
                  alignItems="center"
                ></Stack>
              </Grid>
              {articles.length - 1 !== index && <Divider m={0} />}
            </Fragment>
          ))}
        </VStack>
      )}
    </Container>
  );
}
