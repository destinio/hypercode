export interface Contact {
  name: string
  phone: string
}

export const contacts = [
  { name: 'alice', phone: '111-1111-1111' },
  { name: 'bob', phone: '222-2222-2222' },
  { name: 'charlie', phone: '333-3333-3333' },
] as Contact[]
