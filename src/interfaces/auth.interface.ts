export interface LoginResponse {
  data: {token: string,},
  message: string,
  status: string,
}

export interface CreateResponse {
  status: string,
  message: string
}
