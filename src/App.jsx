import { useState } from 'react'
import './App.css'

function App() {
  
  const [list, updateList] = useState([])
  const [textInput, updateTextInput] = useState ("");


  function handleClickEvent(evento){
    
    if (textInput.length > 0) {
      let newList = Array.from(list); 
      newList.push(textInput); 
      updateList(newList);
      updateTextInput("");
      }
    };

  function handleDeleteClickEvent(index){
    let newList = Array.from(list);
    newList.splice(index, 1); 
    updateList(newList);
  }

  return (
    <>
          <h1>TODOS</h1>
    <div className='container'>
      <input
      placeholder='No hay tareas, añadir tareas'
      type="text"  
      onChange={(evento)=> {updateTextInput(evento.target.value)}}
      onKeyDown={(e) => {
        if (e.key === "Enter")
          handleClickEvent();
        }}/>

      <ul>
        {
          list.map((item, index) =>{
            return <li key={index} > {item} <button className='buttonDL'  onClick={()=> handleDeleteClickEvent(index)}>X</button> </li>
          })
        }
      </ul>
    </div>
    </>
  )
}

export default App