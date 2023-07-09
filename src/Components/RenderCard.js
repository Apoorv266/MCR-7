import React from 'react'


const RenderCard = ({item}) => {
  return (

    <div className='card-main' key={item.id}>
        <img src={item.image} alt="" srcSet="" className='card-img' width={"400px"}/>
        <h3 className='pin-text'>{item.name}</h3>
    </div>
  )
}

export default RenderCard