import { GOOGLE_EXPO_CLIENT_ID, GOOGLE_WEB_CLIENT_ID } from "@env";
import React, { createContext, useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthRequestConfig } from "expo-auth-session/src/providers/Google";
import { AuthRequestPromptOptions, AuthSessionResult } from "expo-auth-session";
import axios from "axios";

type signInGoogleFn = (
  options?: AuthRequestPromptOptions | undefined
) => Promise<AuthSessionResult>;

export type AuthContextType = {
  userInfo: any;
  token: string;
  request: any;
  signInGoogle: signInGoogleFn;
};

export const AuthContext = createContext<AuthContextType | null>(null);

WebBrowser.maybeCompleteAuthSession();

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [token, setToken] = useState("asd");
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, signInGoogle] = Google.useAuthRequest(googleConfig);

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication?.accessToken ?? "");
    }
    if (token.length > 0) {
      getUserInfo().finally(() => console.log("User info request"));
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await axios(googleUserInfoEndpoint, getHeader(token));
      const user = response.data;
      setUserInfo(user);
    } catch (e) {
      console.warn("Unable to get user info");
    }
  };

  return (
    <AuthContext.Provider value={{ userInfo, token, request, signInGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

const googleUserInfoEndpoint = "https://www.googleapis.com/userinfo/v2/me";

function getHeader(token: string) {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
}

const googleConfig: Partial<GoogleAuthRequestConfig> = {
  expoClientId: GOOGLE_EXPO_CLIENT_ID,
  iosClientId: "",
  androidClientId: "",
  webClientId: GOOGLE_WEB_CLIENT_ID,
  selectAccount: true,
};
