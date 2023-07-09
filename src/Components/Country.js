import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { contextData } from '../Context/ContextWrapper'
import RenderCard from './RenderCard'


const Country = () => {
    const { continent, continentId } = useParams()
    const { continents, nagivateFunc } = useContext(contextData)
    const countryArr = continents.find((item) => item.id === Number(continentId))
    const { countries } = countryArr

    return (
        <div>
            <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/computers-mobile-hardware/back-button-icon.png" alt="" srcset="" width={"80px"} onClick={nagivateFunc} className='back-btn' />
            <h1>{continent}</h1>
            <div className='main-container'>
                {countries?.map((item, id) => {
                    return (
                        <Link to={`/${continent}/${continentId}/${item.name}/${item.id}`}>
                            <RenderCard item={item} />
                        </Link>
                    )
                }

                )}

            </div>
        </div>
    )
}

export default Country