import React from 'react'
import Cards from '../Cards/Cards';
import punk from '../../data/punk.js'
import './CardContainers.scss'

const CardContainers = () => {
    
    const cardsJSX = punk.map((beer) => {
        return <Cards 
                key = {beer.id} 
                image = {beer.image_url}
                name = {beer.name}  
                tagline = {beer.tagline}
                age = {beer.first_brewed}
                abv = {beer.abv}
                ph = {beer.ph}/>
    })
  
    return (
        <div className='card-container'>{cardsJSX}</div>
  )
}

export default CardContainers