import React from 'react'
import RenderCard from './RenderCard'
import { Link } from 'react-router-dom'

const PlacesRender = ({ item }) => {

    return (
        <Link to={`/details/${item.name}/${item.id}`}>
            <RenderCard item={item} />
     </Link>
    )
}

export default PlacesRender