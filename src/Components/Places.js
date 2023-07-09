import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { contextData } from '../Context/ContextWrapper'
import CountryRender from './CountryRender'
import PlacesRender from './PlacesRender'

const Places = () => {
  const { continent, continentId, country, countryId } = useParams()
  const { continents } = useContext(contextData)
  const continentObj = continents[Number(continentId - 1)]
  const placeArr = continentObj.countries.find((item) => item.id === Number(countryId))
  const { destinations } = placeArr
  
  return (
    <div>
      <h1>{continent}</h1>
      <h3>{country}</h3>
      <div className='main-container'>
        {destinations?.map((item, id) => <PlacesRender item={item} key={id} continent={continent} continentId={continentId} />)}

      </div>
    </div>
  )
}

export default Places