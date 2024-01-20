


export default function GameBoard({ switchPlayerStyle, board }) {

    // const [gameBoard , setGameBoard] = useState(initialGameBoard)
   
    // function handleSelectSquare(rowIndex,colIndex)
    // {
    //     setGameBoard((previousBoard)=>{
    //         const updateBoard = [...previousBoard.map(innerArray => [...innerArray])]
    //         updateBoard[rowIndex][colIndex] = currActivePlayer
    //         return updateBoard;
    //     })

    //     switchPlayerStyle()
    // }

   
    return (<>
        <ol id="game-board">
            {board.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>{row.map((playerSymbol, colIndex) => (<li key={colIndex}>
                    <button onClick={()=> switchPlayerStyle(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                    </li>))}</ol>
            </li>))}

        </ol>

    </>);
}