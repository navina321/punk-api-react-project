import React from 'react'
import "./Card.scss"

const Card = (props) => {
  
  const {image, name, description, age, abv, ph} = props;

  const lastSentenceIndex = description.indexOf(".",45)+1;
  const shortDescription = description.substring(0, lastSentenceIndex);
  
    return (
      <div className='beer-card'>
      <div className='beer-card__img-container'>
          <img className='beer-card__img-container--image' src={image} alt={name}/>
      </div>
      <div className='text-container'>
          <h1 className='beer-card__name'>{name}</h1>
          {/* <h2 className='beer-card__tag'>"{tagline}"</h2> */}
          <h3 className='beer-card__desc'>{shortDescription}</h3>
          <div  className='beer-card__info'> 
              <h3 className='beer-card__info--title'>Info:</h3>
              <h4>First Brewed: {age}</h4>
              <h4>ABV: {abv}</h4>
              <h4>pH: {ph}</h4>
          </div>
      </div>
  </div>
)
}

export default Card