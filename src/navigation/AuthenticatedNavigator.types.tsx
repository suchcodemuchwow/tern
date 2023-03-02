import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthenticatedNavigatorProps } from "./RootNavigator.types";

export type MainNavigatorTabParamList = {
  Home: undefined;
  Explore: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  StackScreenProps<MainNavigatorTabParamList, "Home">,
  MainScreenProps
>;

export type ExploreScreenProps = CompositeScreenProps<
  StackScreenProps<MainNavigatorTabParamList, "Explore">,
  MainScreenProps
>;

export type NotificationScreenProps = CompositeScreenProps<
  StackScreenProps<MainNavigatorTabParamList, "Notification">,
  MainScreenProps
>;

export type ProfileScreenProps = CompositeScreenProps<
  StackScreenProps<MainNavigatorTabParamList, "Profile">,
  MainScreenProps
>;

export type AuthenticatedNavigatorStackParamList = {
  Main: MainNavigatorTabParamList;
  Settings: undefined;
  NewPost: undefined;
};

export type MainScreenProps = CompositeScreenProps<
  StackScreenProps<AuthenticatedNavigatorStackParamList, "Main">,
  AuthenticatedNavigatorProps
>;

export type SettingsScreenProps = CompositeScreenProps<
  StackScreenProps<AuthenticatedNavigatorStackParamList, "Settings">,
  AuthenticatedNavigatorProps
>;

export type NewPostScreenProps = CompositeScreenProps<
  StackScreenProps<AuthenticatedNavigatorStackParamList, "NewPost">,
  AuthenticatedNavigatorProps
>;
