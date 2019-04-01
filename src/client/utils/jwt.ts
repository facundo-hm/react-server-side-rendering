const JWT_KEY = 'jwt'

export const saveJwt = (jwt: string) => {
  localStorage.setItem(JWT_KEY, jwt)
}

export const getJwt = () => {
  return localStorage.getItem(JWT_KEY)
}

export const clearJwt = () => {
  localStorage.removeItem(JWT_KEY)
}
