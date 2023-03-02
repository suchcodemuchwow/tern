import { NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthenticatedNavigatorStackParamList } from './AuthenticatedNavigator.types'
import { UnauthenticatedNavigatorStackParamList } from './UnauthenticatedNavigator.types'

export type RootNavigatorStackParamList = {
  UnauthenticatedNavigator: NavigatorScreenParams<UnauthenticatedNavigatorStackParamList>
  AuthenticatedNavigator: NavigatorScreenParams<AuthenticatedNavigatorStackParamList>
}

export type UnauthenticatedNavigatorProps = StackScreenProps<RootNavigatorStackParamList, 'UnauthenticatedNavigator'>
export type AuthenticatedNavigatorProps = StackScreenProps<RootNavigatorStackParamList, 'AuthenticatedNavigator'>
