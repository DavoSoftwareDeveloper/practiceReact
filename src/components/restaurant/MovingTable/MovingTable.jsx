import { useEffect, useState } from 'react';
import './MovingTable.css';

function MovingTable({ id, editTables, initialPositions, editedTables, setEditedTables, savedTables }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPositions || { x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });


  useEffect(()=>{
    
    if ( editTables) {return}
    else {
      if(editedTables.length > 1) {
        localStorage.setItem('posicionesMesas', JSON.stringify(editedTables))}
    }
  },[editTables])

  useEffect(()=> {
    console.log(editedTables)
  },[editedTables])

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {

    const tableEdited = {
        id,
        positions: {
          x: position.x,
          y: position.y
        }
    }

    setIsDragging(false);
    setEditedTables(prev => {
      let sameId = prev.filter(obj => obj.id !== id)
      if ( sameId ) { 
        return [ ...sameId, tableEdited]
      }
      else {
        return [...prev, tableEdited]
      }})
  };
  const handleDetails = () => {
    console.log("details")
  };


  return (
    <div
      id={id}
      className={isDragging ? "square select" : "square"}
      style={{
        left: position.x,
        top: position.y,
      }}
      onMouseDown={editTables? (e)=> handleMouseDown(e) : (e)=>handleDetails(e, id) }
      onMouseMove={editTables ? handleMouseMove : null }
      onMouseUp={editTables ? (e)=>handleMouseUp(e, id) : null }
    ><div className='number'>{id}</div></div>
  );
}

export default MovingTable;
