import { AuthContext, AuthContextType } from "../../context/AuthContext";
import { Center, HStack } from "native-base";
import React, { useContext } from "react";
import { SearchScreenProps } from "src/navigation/AuthenticatedNavigator.types";

export function Search({ navigation: { navigate } }: SearchScreenProps) {
  const { signOut } = useContext(AuthContext) as AuthContextType;
  return <Center flex="1"></Center>;
}
