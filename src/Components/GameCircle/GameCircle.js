import React from 'react'
import './GameCircle.css'


const GameCircle = ({id,onCircleClicked,className}) => {
  const onClick = (e,id) =>{
    onCircleClicked(id)
}
  return (
    <div onClick={(e)=>onClick(e,id)} className={`circle ${className}`}>
        
    </div>
  )
}

export default GameCircle