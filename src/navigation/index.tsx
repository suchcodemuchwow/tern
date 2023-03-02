// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { StatusBar, useColorMode } from 'native-base'
// import { Home } from 'src/screens'
// import { AuthenticatedBottomTabParamList, RootStackParamList, UnauthenticatedStackParamList } from 'src/navigation/types'
// import { Profile } from 'src/screens/authenticated/Profile'
// import { ForgotPassword, SignIn, SignUp } from 'src/screens/unauthenticated'
//
// const RootStack = createStackNavigator<RootStackParamList>()
// const UnauthenticatedStack = createStackNavigator<UnauthenticatedStackParamList>()
// const AuthenticatedStack = createBottomTabNavigator<AuthenticatedBottomTabParamList>()
//
// function Unauthenticated() {
//   const isLoggedIn = false
//   const animationTypeForReplace = isLoggedIn ? 'push' : 'pop'
//   return (
//     <UnauthenticatedStack.Navigator>
//       <UnauthenticatedStack.Screen name="SignIn" component={SignIn} options={{ animationTypeForReplace }} />
//       <UnauthenticatedStack.Screen name="SignUp" component={SignUp} options={{ animationTypeForReplace }} />
//       <UnauthenticatedStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ animationTypeForReplace }} />
//     </UnauthenticatedStack.Navigator>
//   )
// }
//
// function Authenticated() {
//   return (
//     <AuthenticatedStack.Navigator screenOptions={{ headerShown: false }}>
//       <AuthenticatedStack.Screen name="Home" component={Home} />
//       <AuthenticatedStack.Screen name="Profile" component={Profile} />
//     </AuthenticatedStack.Navigator>
//   )
// }
//
// export function RootNavigation() {
//   const { colorMode } = useColorMode()
//   const theme = colorMode === 'light' ? 'light' : 'dark'
//   const isLoggedIn = false
//
//   return (
//     <NavigationContainer>
//       <StatusBar barStyle={`${theme}-content`} />
//       <RootStack.Navigator screenOptions={{ headerShown: false }}>
//         {isLoggedIn ? (
//           <RootStack.Screen name="Authenticated" component={Authenticated} />
//         ) : (
//           <RootStack.Screen name="Unauthenticated" component={Unauthenticated} />
//         )}
//       </RootStack.Navigator>
//     </NavigationContainer>
//   )
// }
