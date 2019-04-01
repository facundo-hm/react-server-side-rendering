import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'

export interface Domain {
  id: string
  domain: string
  createdAt: string
  updatedAt: string
  userId: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  active: boolean
  createdAt: string
  updatedAt: string
  Domains: Domain[]
}

export type Step = {
  title?: string
  description: string
}

export type ServicesId = 'evaluate' | 'draft-and-represent'

export interface Service {
  imageClass: string
  title: JSX.Element
  titleString: string
  description: string
  price: string
  type: 'evaluate-my-case' | 'draft-and-represent-me'
}

export interface Services {
  [key: string]: Service
}

export type GoogleLoginSuccess = (
  response: GoogleLoginResponse | GoogleLoginResponseOffline
) => void

export type GoogleLoginFailure = (error: any) => void

export type SignIn = (email: string, password: string) => void

export type SignUp = (email: string, phone: string, password: string) => void

export interface SignInResponse {
  user: User
  token: string
  errors?: string | string[]
}

export type LawsuitType = 'trademark' | 'patent' | 'copyright' | 'domainDispute'

export type PlaintiffType = 'individual' | 'company' | 'other'

export interface Address {
  [key: string]: string
  addressLine1: string
  city: string
  stateProvince: string
  zipCode: string
  website: string
  type: AddressType
}

export type AddressType = 'plaintiff' | 'defendant'

export type SetValue = (
  e: React.ChangeEvent<HTMLInputElement>,
  addressType?: AddressType
) => void

export interface StripeResponse {
  response: {
    id: string
    status: string
  }
}

export interface Order {
  id: number
}

export interface CreateOrderRes {
  order: Order
}
