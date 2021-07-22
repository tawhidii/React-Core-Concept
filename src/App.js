import logo from './logo.svg';
import './App.css';
import './Character.css';
import React, { useEffect, useState } from 'react';


function App() {

  useEffect(()=>{
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response=>response.json())
    .then(data=>setCharacter(data))
  },[])

  const [character,setCharacter] = useState([])
  return (
    <div>
      {
        character.map(char=><HarryPotter name={char.name} image={char.image} actor={char.actor}></HarryPotter>)
      }
    
    </div>
  );
}

function HarryPotter(props){
  console.log(props)

  return(
    <div className="character-card">
      <h1>{props.name}</h1>
      <img src={props.image} alt="" />
      <h1>Original Name  of actor : {props.actor} </h1>
      <aside>
        
      </aside>
    </div>
  )
}




export default App;
