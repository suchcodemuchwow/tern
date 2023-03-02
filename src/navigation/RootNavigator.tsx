import { AuthContext, AuthContextType } from "../context/AuthContext";
import { AuthenticatedNavigator } from "./AuthenticatedNavigator";
import { RootNavigatorStackParamList } from "./RootNavigator.types";
import { UnauthenticatedNavigator } from "./UnauthenticatedNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";

const Stack = createStackNavigator<RootNavigatorStackParamList>();

export function RootNavigator() {
  const { token } = useContext(AuthContext) as AuthContextType;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <Stack.Screen
            name="AuthenticatedNavigator"
            component={AuthenticatedNavigator}
          />
        ) : (
          <Stack.Screen
            name="UnauthenticatedNavigator"
            component={UnauthenticatedNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
