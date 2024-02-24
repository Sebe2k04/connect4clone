import React from 'react'
import './Header.css'

const Header = ({player,state}) => {

    const result = (state) =>{
        if(state===1){
            return <div>Player {player} Turn</div>
        }
        if(state===2){
            return <div>Player {player ===1 ? 2:1} Wins</div>
        }
        if(state===3){
            return <div>It's a Draw</div>
        }
    }
  return (
    <div className='BoardHeader'>
        <div className="header-text">
           {result(state)}
        </div>
    </div>
  )
}

export default Header