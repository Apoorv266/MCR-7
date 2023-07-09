import React, { useContext } from 'react'
import RenderCard from './RenderCard'
import "../Style/Style.css"
import { contextData } from '../Context/ContextWrapper'
import { Link } from 'react-router-dom'
import ContinentRender from './ContinentRender'

const Continent = () => {
    const {continents} = useContext(contextData)
    return (
        <div>
            <h1>Welcome to trip advisor!</h1>
            <h3>Top continents for your next holiday</h3>
            <div className='main-container'>
              
                {continents?.map((item, id) =>  <ContinentRender item={item} key={id}/>)}

            </div>
        </div>
    )
}

export default Continent