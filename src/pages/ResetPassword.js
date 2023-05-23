import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Center,
  HStack,
  PinInput,
  PinInputField,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { resetPasswordAPI, verifyOtpAPI } from "./Service";

type ForgotPasswordFormInputs = {
  email: string,
};

export default function Resetpassword(): JSX.Element {
  const toast = useToast();
  const [rollno, setRollno] = useState("");
  const [otp, setOtp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [password, setPassword] = useState("");
  const sendOtptoEmail = async () => {
    const data = await resetPasswordAPI({ rollno });
    toast({
      title: "OTP sent to your email",
      description: "Please check your email for OTP",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOtpSent(true);
  };
  const verifyPassword = async () => {
    let otp_ = otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5 + otp.otp6;
    const data = await verifyOtpAPI({ rollno, otp: otp_, password });
    setIsOtpSent(false);
    toast({
      title: "Password reset successful",
      description: "Please login with your new password",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    window.location.href = "/login";
  };

  return !isOtpSent ? (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.300"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={"gray.300"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Forgot your password?
        </Heading>
        <Text fontSize={{ base: "sm", sm: "md" }} color={"gray.800"}>
          You&apos;ll get an email with a reset OTP
        </Text>
        <FormControl id="roll no">
          <Input
            value={rollno}
            onChange={(e) => setRollno(e.target.value)}
            placeholder="Roll no"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={sendOtptoEmail}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
  ) : (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"gray.300"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"sm"}
        bg={"gray.300"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={10}
      >
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Verify your Email
          </Heading>
        </Center>
        <Center fontSize={{ base: "sm", sm: "md" }} color={"gray.800"}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color={"gray.300"}
        ></Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField
                  onChange={(e) => setOtp({ ...otp, otp1: e.target.value })}
                />
                <PinInputField
                  onChange={(e) => setOtp({ ...otp, otp2: e.target.value })}
                />
                <PinInputField
                  onChange={(e) => setOtp({ ...otp, otp3: e.target.value })}
                />
                <PinInputField
                  onChange={(e) => setOtp({ ...otp, otp4: e.target.value })}
                />
                <PinInputField
                  onChange={(e) => setOtp({ ...otp, otp5: e.target.value })}
                />
                <PinInputField
                  onChange={(e) => setOtp({ ...otp, otp6: e.target.value })}
                />
              </PinInput>
            </HStack>
            {/* add password field
             */}
          </Center>
        </FormControl>
        <FormControl id="password">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={verifyPassword}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
