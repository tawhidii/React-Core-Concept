import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  let friends = [
    {name:'A',age:20},
    {name:'B',age:23},
    {name:'C',age:24}
  ]


  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      {
        friends.map(fnd=><Friends friends={fnd}></Friends>)
      }
     
      </header>
    </div>
  );
}

// Counter component 
const Counter = () =>{
  const [count, setCount] = useState(10)
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove={() => setCount(count - 1)} >Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response=>response.json())
    .then(data=>setUsers(data))
  })
  return(
    <div>
      <ul>
        {
          users.map(u=><li>{u.name}</li>)
        }
      </ul>
    </div>
  )
}

const Friends = (props) =>{
  const friendsStyle = {
    border:"2px solid cyan",
    color:'black',
    backgroundColor:'yellow',
    float:'left',
    height:"300px",
    width:"300px",
    borderRadius:'15px',
    margin:'15px',
  }

  return(
    <div style={friendsStyle}>
      <h3>{props.friends.name}</h3>
      <p>{props.friends.age}</p>
    </div>
  )
}

export default App;
