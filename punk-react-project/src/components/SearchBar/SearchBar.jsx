import React from 'react'
import './SearchBar.scss'

const SearchBar = (props) => {
    
    const {handleSearch} =props
    
  
    return (
    <div className='search-bar'>
        <input type="text" placeholder='Search' onInput={handleSearch}/>
    
    </div>
  )
}

export default SearchBar