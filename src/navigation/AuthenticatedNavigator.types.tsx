import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthenticatedNavigatorProps } from "./RootNavigator.types";

export type AuthenticatedNavigatorStackParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  StackScreenProps<AuthenticatedNavigatorStackParamList, "Home">,
  AuthenticatedNavigatorProps
>;

export type SearchScreenProps = CompositeScreenProps<
  StackScreenProps<AuthenticatedNavigatorStackParamList, "Search">,
  AuthenticatedNavigatorProps
>;

export type NotificationScreenProps = CompositeScreenProps<
  StackScreenProps<AuthenticatedNavigatorStackParamList, "Notification">,
  AuthenticatedNavigatorProps
>;

export type ProfileScreenProps = StackScreenProps<
  AuthenticatedNavigatorStackParamList,
  "Profile"
>;
