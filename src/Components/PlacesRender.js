import React from 'react'
import RenderCard from './RenderCard'
import { Link } from 'react-router-dom'

const PlacesRender = ({ item, continent, country }) => {
    // /:continent/:country/:countryId/:place
    return (
        // <Link to={`/${continent}/${country}/${item.name}/${item.id}`}>
            <RenderCard item={item} />
        // </Link>
    )
}

export default PlacesRender