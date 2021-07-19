import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p> I am a react person </p>
      <Person name='Tawidi Bari' profession="Hacker" salary="20M"></Person>
      <Person name='Tawidi Bari' profession="Hacker" salary="20M"></Person>
      </header> 
    </div>
  );
}


function Person(props){
  return(
    <div style={{border:'2px solid blue' ,margin:"20px",borderRadius:'15px'}}>
        <h1> Person Name is : {props.name}</h1>
        <h2>Person Profession: {props.profession}</h2>
        <h3>Person Salary : {props.salary}</h3>
    </div>
  )
}

export default App;
