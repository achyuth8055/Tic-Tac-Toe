

export default function Log({turns})
{
    let playerLog = turns
    return(<>
    <ol id="log">
        {playerLog.map((turn)=>{
            return(
            <li key={`${turn.square.row} ${turn.square.col}`}>{turn.player} Selected {turn.square.row} {turn.square.col} </li>)
        })}
    </ol>
    </>)
}