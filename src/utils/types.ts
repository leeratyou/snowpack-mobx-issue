export interface Org {
  id: string
  name: string
  groups: Group[]
}

export interface Group {
  id: string | number
  name: string
  users: number
  icon?: any
  members: any
}
