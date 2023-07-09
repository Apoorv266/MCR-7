import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { contextData } from '../Context/ContextWrapper'
import PlacesRender from './PlacesRender'

const Places = () => {
  const { continent, continentId, country, countryId } = useParams()
  const { continents, setplacesArr, nagivateFunc } = useContext(contextData)
  const continentObj = continents[Number(continentId - 1)]
  const placeArr = continentObj.countries[countryId -1]
  const { destinations } = placeArr
  

  useEffect(() => {
    setplacesArr(destinations)
  }, [])
  
  return (
    <div>
      <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/back-button-icon.png" alt="" srcset="" width={"80px"} onClick={nagivateFunc} className='back-btn'/>
      <h1>{continent}</h1>
      <h3>{country}</h3>
      <div className='main-container'>
        {destinations?.map((item, id) => <PlacesRender item={item} key={id} continent={continent} continentId={continentId} />)}

      </div>
    </div>
  )
}

export default Places