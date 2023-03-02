import { AuthContext, AuthContextType } from "../../context/AuthContext";
import { SignInProps } from "../../navigation/UnauthenticatedNavigator.types";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  ITextProps,
  Link,
  Text,
  VStack,
} from "native-base";
import React, { useContext } from "react";

const signUpLinkStyle: Partial<ITextProps> = {
  fontSize: "sm",
  fontWeight: "medium",
  color: "indigo.500",
};
const forgotPasswordLinkStyle: Partial<ITextProps> = {
  fontSize: "xs",
  fontWeight: "medium",
  color: "indigo.500",
};

export const SignIn = ({ navigation: { navigate } }: SignInProps) => {
  const { signInGoogle } = useContext(AuthContext) as AuthContextType;

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={forgotPasswordLinkStyle}
              alignSelf="flex-end"
              mt="1"
              onPress={() => navigate("ForgotPassword")}
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={() => console.log("xd")}>
            Sign in
          </Button>
          <Button mt="2" colorScheme="indigo" onPress={() => signInGoogle()}>
            Sign in with Google
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              I'm a new user.{" "}
            </Text>
            <Link _text={signUpLinkStyle} onPress={() => navigate("SignUp")}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};
