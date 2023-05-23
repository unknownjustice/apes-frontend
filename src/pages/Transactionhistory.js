import React, { Fragment } from "react";
import {
  chakra,
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Text,
  Icon,
  Tag,
  Divider,
  Avatar,
  AvatarGroup,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";

const articles = [
  {
    id: 1,
    tags: ["News"],
    title: "Build a Modern User Interface with Chakra UI",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. simply dummy text...`,
    userAvatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    usernames: "Danilo, Sam, Olivier, and more.",
    created_at: "Wed Apr 06 2022",
  },
  {
    id: 2,
    tags: ["Web Development", "Video"],
    title: "The Complete Guide to Ruby on Rails Encrypted Credentials",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    userAvatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80",
    usernames: "Timo Delangle, Olivier, and more.",
    created_at: "Sun Apr 03 2022",
  },
];

const Transactionhistory = () => {
  return (
    <div className="wrapper rounded">
      {" "}
      <div className="table-responsive mt-3">
        {" "}
        <table className="table table-dark table-borderless">
          {" "}
          <thead>
            {" "}
            <tr>
              {" "}
              <th scope="col">Activity</th> <th scope="col">Date</th>{" "}
              <th scope="col" className="text-right">
                Amount
              </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            <tr>
              {" "}
              <td scope="row">
                {" "}
                <span /> Coorg Trip{" "}
              </td>{" "}
              <td className="text-muted">12 Jul 2020, 12:30 PM</td>{" "}
              <td className="d-flex justify-content-end align-items-center">
                {" "}
                <span /> $52.9{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td scope="row">
                {" "}
                <span /> Coorg Trip{" "}
              </td>{" "}
              <td className="text-muted">12 Jul 2020, 12:30 PM</td>{" "}
              <td className="d-flex justify-content-end align-items-center">
                {" "}
                <span /> $52.9{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td scope="row">
                {" "}
                <span /> Coorg Trip{" "}
              </td>{" "}
              <td className="text-muted">12 Jul 2020, 12:30 PM</td>{" "}
              <td className="d-flex justify-content-end align-items-center">
                {" "}
                <span /> $52.9{" "}
              </td>{" "}
            </tr>{" "}
            <tr>
              {" "}
              <td scope="row">
                {" "}
                <span /> Coorg Trip{" "}
              </td>{" "}
              <td className="text-muted">12 Jul 2020, 12:30 PM</td>{" "}
              <td className="d-flex justify-content-end align-items-center">
                {" "}
                <span /> $52.9{" "}
              </td>{" "}
            </tr>{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
};

export default Transactionhistory;
