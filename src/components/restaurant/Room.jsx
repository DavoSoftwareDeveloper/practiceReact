import { useState } from 'react'
import MovingTable from './MovingTable/MovingTable'
import "./Room.css"

function Room() {
    const [editTables, setEditTables] = useState(true)
    const [savedTables, setSavedTables]= useState(JSON.parse(localStorage.getItem('posicionesMesas')) || [])
    const [editedTables, setEditedTables]= useState(savedTables || [])
    const tableNum = [1,2,3,4,5,6,7,8]

    const handleEdit = () => {
        setEditTables(prev => !prev)
    }

    const savedPositions = (tableId ) => {
        const selectedTable = savedTables?.find(table => table.id === tableId)
        if ( !savedTables || !selectedTable ) {
            return {x:0,y:0}
    }
        return selectedTable.positions
    }

  return (
    <>
    <h1>Moving Tables</h1>
    <div className='space'>
        {tableNum.map(tableId => {
            const positionStart = savedPositions(tableId)
            return <MovingTable 
                        key={tableId} 
                        id={tableId} 
                        editTables={editTables} 
                        initialPositions={positionStart}
                        editedTables={editedTables}
                        setEditedTables={setEditedTables}
                        savedTables={savedTables}/>
        })}
    </div>
    <button onClick={handleEdit} className='editButton'>{editTables ? "set tables" : "move tables"}</button>
    </>
  )
}

export default Room
