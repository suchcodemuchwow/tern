import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Center, Fab, Icon } from "native-base";

import { HomeScreenProps } from "src/navigation/AuthenticatedNavigator.types";

export function Home(props: HomeScreenProps) {
  return (
    <Center flex="1">
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        onPress={() => props.navigation.navigate("NewPost")}
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
      />
    </Center>
  );
}
