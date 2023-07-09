import React from 'react'
import { Link } from 'react-router-dom'
import RenderCard from './RenderCard'

const ContinentRender = ({item}) => {
  return (
    <Link to={`/${item.name}/${item.id}`}>
        <RenderCard item={item}/>
    </Link>
  )
}

export default ContinentRender