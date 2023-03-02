import { NativeBaseProvider } from "native-base";
import React from "react";
import { AuthProvider } from "src/context/AuthContext";
import { RootNavigator } from "src/navigation/RootNavigator";

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
