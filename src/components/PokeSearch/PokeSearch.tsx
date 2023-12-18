import React from 'react'
import "./PokeSearch.css"
interface SearchboxProps{
  onInputChange: (inputValue: string)=>void;
}
const PokeSearch = ({onInputChange}:SearchboxProps) => {
  return (
   <input onChange={(e)=>onInputChange(e.target.value)} type="search" className="search" placeholder='Search Pokemon' />
  )
}

export default PokeSearch;