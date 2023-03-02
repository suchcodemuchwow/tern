import { UnauthenticatedNavigatorStackParamList } from "./UnauthenticatedNavigator.types";
import { createStackNavigator } from "@react-navigation/stack";
import { ForgotPassword, SignIn, SignUp } from "src/screens/unauthenticated";

const Stack = createStackNavigator<UnauthenticatedNavigatorStackParamList>();

export const UnauthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
