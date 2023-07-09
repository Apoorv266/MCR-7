import React, { createContext, useState } from 'react'
import { data } from '../Data/Data'
import { useNavigate } from 'react-router-dom';

export const contextData = createContext()
const ContextDataWrapper = ({children}) => {
  const navigate = useNavigate();
  const {continents} = data
  const [placesArr, setplacesArr] = useState([])

  const nagivateFunc = () => navigate(-1)
  
  return (
    <contextData.Provider value={{continents, setplacesArr, placesArr, nagivateFunc}}>{children}</contextData.Provider>
  )
}

export default ContextDataWrapper