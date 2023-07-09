import React, { createContext, useState } from 'react'
import { data } from '../Data/Data'

export const contextData = createContext()

const ContextDataWrapper = ({children}) => {
  const {continents} = data
  return (
    <contextData.Provider value={{continents}}>{children}</contextData.Provider>
  )
}

export default ContextDataWrapper