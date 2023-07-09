import React from 'react'
import { Link } from 'react-router-dom'
import RenderCard from './RenderCard'

const CountryRender = ({ item, continent, continentId }) => {

    return (
        <Link to={`/${continent}/${continentId}/${item.name}/${item.id}`}>
            <RenderCard item={item} />
        </Link>
    )
}

export default CountryRender