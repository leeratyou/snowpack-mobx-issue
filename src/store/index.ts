import { useContext, createContext } from 'react'

import user from './user.store'

export const stores = {
  user,
}

export {
  user,
}

const storesContext = createContext(stores)

export default function useStore() {
  return useContext<typeof stores>(storesContext)
}
