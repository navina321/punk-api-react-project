import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

import './Nav.scss'

const Nav = (props) => {
   const {handleSearch} = props

    return (
      
    <div className='nav-bar'>
      <div>
        <h1>Punk Beers</h1>
      </div>
      <div>
        <SearchBar className='nav-bar__search' handleSearch={handleSearch}/>
      </div>
        
    </div>
  )
}

export default Nav