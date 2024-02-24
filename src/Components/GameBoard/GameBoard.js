import React,{useEffect, useState} from 'react'
import GameCircle from '../GameCircle/GameCircle'
import './GameBoard.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {isWinner,getComputerMove} from '../Helper/Helper';

const NO_PLAYER = 0,PLAYER_1 = 1,PLAYER_2 = 2;
const PLAY_STATE=1,WIN_STATE=2,DRAW_STATE=3; 
const no_circles = 16;
const GameBoard = () => {


  const [gameBoard,setGameBoard]  = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer,setCurrentPlayer] = useState(PLAYER_1);
  const [gameState,setGameState] = useState(PLAY_STATE);
  const [moveCount,setMoveCount] = useState(0);
  console.log(gameBoard);
  console.log(`moveCount: ${moveCount}`)

  useEffect(()=>{
    initGame();
  },[]);

  const initGame = () => {
    console.log("at start");
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setMoveCount(0);
    setGameState(PLAY_STATE)
  }

  const initBoard = () =>{
    const circles = [];
    for(let i=0;i<no_circles;i++){
      circles.push(renderCircle(i));
    }
    return circles;
  }

  const suggestMove = () =>{
    circleClicked(getComputerMove(gameBoard));
  }

  const circleClicked = (id) =>{
    console.log("circle clicked : " + id);

    if(gameBoard[id] !== NO_PLAYER ) return;
    if(gameState !== PLAY_STATE) return;

    //draw

    if(moveCount > 14){
      setGameState(DRAW_STATE);
    }
    if(moveCount>15)
    {
      if(gameState===DRAW_STATE){
        return;
      }
      
    }

    if(isWinner(gameBoard,id,currentPlayer)){
      setGameState(WIN_STATE);
    }

    //brute force implementation but simple

    // const board = [...gameBoard]
    // board[id]=currentPlayer;
    // setGameBoard(board);

    // optimal change for above functionality but complex

    setGameBoard(prev => {
      return prev.map((circle,pos) => {
        if(pos===id) return currentPlayer;
        return circle;
      })
    })
    //player
    setCurrentPlayer(currentPlayer === PLAYER_1? PLAYER_2 : PLAYER_1);
    //move for draw state
    setMoveCount(moveCount+1);
  }
  console.log(`currentPlayer: ${currentPlayer}`)

  const renderCircle = (id) =>{
    return <GameCircle key={id} id={id} onCircleClicked={circleClicked} className={`p${gameBoard[id]}`}/>
  }
  

  return (
    <div className="GameBoard-Area">
      <div className="Gameboard-Content">
      <Header player={currentPlayer} state={gameState}/>
      <div className='GameBoard'>
        {initBoard()}
      </div>
      <Footer onNewGameClick={()=>initGame()} onAIClick={()=>suggestMove()}/>
      </div>
    </div>
  )
}

export default GameBoard