import { useState } from "react";



export default function Players({ playerName, playerSymbol,isActive}) {
    const [editPlayer, setEditPlayer] = useState(false)
    const [editedName, setPlayerName] = useState(playerName)

    let editable = <span className="player-name">{editedName}</span>
    function editHandler() {
        setEditPlayer((editable) => !editable)

    }

    if (editPlayer)
        editable = <input type="text" className="player-name" value={editedName} onChange={editPlayerName}/>

    function editPlayerName(event)
    {
        setPlayerName(event.target.value);
    }
    
    return (<>

        <li className={isActive?'active':undefined}>
            <span className="player">
                {editable}
                <span className="player-Symbol">{playerSymbol}</span>
            </span>
            <button onClick={editHandler} disabled={playerSymbol !== null }>{editPlayer ? "Save" : "Edit"} </button>
        </li> 

    </>);
}