import React from 'react'
import './Footer.css'

const Footer = ({onNewGameClick,onAIClick}) => {
  return (
    <div className='BoardFooter' >
        <div className="Footer-content">
        <div className="Footer-text" onClick={onNewGameClick}>
            <p>New Game</p>
        </div>
        <div className="Footer-text" onClick={onAIClick}>
            <p>AI</p>
        </div>
        </div>
    </div>
  )
}

export default Footer