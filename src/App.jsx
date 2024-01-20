import Players from "./components/Players";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/winnerCombo";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function helperActivePlayer(gameTurns)
{
  let currentPlayer = 'X'
  if(gameTurns.length>0 && gameTurns[0].player ==='X')
  {
    currentPlayer = 'O'
  }

  return currentPlayer
}
function App() {

// const [activePlayer,setActivePlayer] = useState('X');

const [gameTurns,setGameTurns] = useState([]);

const activePlayer = helperActivePlayer(gameTurns)

let gameBoard = [...initialGameBoard.map((innerArray)=> [...innerArray])];

for(const turn of gameTurns)
{
    const {square,player} = turn;
    const {row,col} = square;
    gameBoard[row][col] = player
}
let winner = undefined;
for(const combo of WINNING_COMBINATIONS)
{
    const firstSquareSymbol = gameBoard[combo[0].row][combo[0].column]
    const secondSquareSymbol = gameBoard[combo[1].row][combo[1].column]
    const thirdSquareSymbol = gameBoard[combo[2].row][combo[2].column]

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol)
    {
        winner = firstSquareSymbol;
    }
} 
const hasDraw = gameTurns.length === 9 && !winner

function onRestartGame()
{
  setGameTurns([]);
}
function handleActivePlayer(rowIndex,colIndex)
{
   // setActivePlayer((currentActivePlayer)=> currentActivePlayer==='X'?'O':'X')

    setGameTurns((previousTurns)=>{

       const currentPlayer = helperActivePlayer(previousTurns)
       const updateTurns = [{square:{row:rowIndex,col:colIndex},player:currentPlayer},...previousTurns]

      return updateTurns;
    })
}

  return(
    <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Players playerName="macbook" playerSymbol="X" isActive={activePlayer==='X'}/>
                <Players playerName="Iphone" playerSymbol="O" isActive={activePlayer==='O'}/>
            </ol>
            {( winner || hasDraw)&& <GameOver winner={winner} onRestart={()=> onRestartGame()}/>}
            <GameBoard switchPlayerStyle={handleActivePlayer} board={gameBoard}/>
        </div>
       <Log turns={gameTurns}/>
    </main>
  );
}

export default App
