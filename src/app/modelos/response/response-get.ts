export class ListResponse {
  success: boolean
  data: Data
}

export class Data {
  personObjects: PersonObjects[];
  success: boolean
  errors?: any
}

export class PersonObjects {
  id: number
  nome: string
}