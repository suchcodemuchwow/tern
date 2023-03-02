import { CompositeScreenProps } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { UnauthenticatedNavigatorProps } from './RootNavigator.types'

export type UnauthenticatedNavigatorStackParamList = {
  SignIn: undefined
  SignUp: undefined
  ForgotPassword: undefined
}

export type SignInProps = CompositeScreenProps<StackScreenProps<UnauthenticatedNavigatorStackParamList, 'SignIn'>, UnauthenticatedNavigatorProps>

export type SignUpProps = StackScreenProps<UnauthenticatedNavigatorStackParamList, 'SignUp'>
