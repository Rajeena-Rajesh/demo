import React from 'react'
import './Recipetile.css';
function Recipetile({recipe}) {
  return (
//to prevent those images from rendering
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)!=null && (
    <div className='recipeTile'>
      {/* <h1>recipe tile</h1> */}
      
      <img className="recipeTile__image" src={recipe["recipe"]["image"]} alt="tile-image" onClick={()=>
        window.open(recipe["recipe"]["url"]
      )}/>
      <p className="recipeTile__label">{recipe["recipe"]["label"]}</p>
    </div>
    )
  )
}
 
export default Recipetile
