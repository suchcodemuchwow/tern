import { AuthContext, AuthContextType } from "../../context/AuthContext";
import { Button, Center, HStack } from "native-base";
import React, { useContext } from "react";
import { HomeScreenProps } from "src/navigation/AuthenticatedNavigator.types";

export function Home({ navigation: { navigate } }: HomeScreenProps) {
  const { signOut } = useContext(AuthContext) as AuthContextType;
  return <Center flex="1"></Center>;
}
