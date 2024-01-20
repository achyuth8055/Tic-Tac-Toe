export default function GameOver({winner , onRestart})
{
    return(<>
    
        <div id="game-over">
            <h2>Game Over.!</h2>
           {winner && <p>{winner} You Won the Match.!</p> }
           {!winner && <p>Oops Itsa a Draw Match.!</p> }
          <p><button onClick={onRestart}>click to rematch</button></p>
        </div>
    
    </>)
}