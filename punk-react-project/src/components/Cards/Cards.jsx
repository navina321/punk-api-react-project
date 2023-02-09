import React from 'react'
import './Cards.scss'

const Cards = (props) => {
    const {image, name, tagline, age, abv, ph} = props;
  
    return (
    <div className='beer-card'>
        <img className='beer-card__image' src={image} alt={name}/>
        <h1 className='beer-card__name'>{name}</h1>
        <h2 className='beer-card__tag'>{tagline}</h2>
        <h3 className='beer-card__info'>{age}</h3>
        <h3 className='beer-card__info'>{abv}</h3>
        <h3 className='beer-card__info'>{ph}</h3>
        
    </div>
  )
}

export default Cards