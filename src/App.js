import logo from './logo.svg';
import './App.css';

function App() {
  let superHeroOne = {
    name:'SuperMan',
    comics: 'DC',
    producer : 'Jack Snyder'
  }

  let style = {
    color : 'red',
    backgroundColor:'white'
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 style={style}> Movie Name : {superHeroOne.name}</h1>
      <h2 style={{color:"cyan",backgroundColor:"yellow"}}>Producer Name: {superHeroOne.producer}</h2>
      <ActionMovie></ActionMovie>
      </header> 
    </div>
  );
}

function ActionMovie(){
  const movieStyle = {
    border: '2px solid red',
    margin: '10px',
    backgroundColor:'green'
  }
  return(
    <div style={movieStyle}>
       <h1> Movie Name : Fast and Furious </h1>
       <h3> Producer Name : Jack Frost </h3>
    </div>
  ) 
}
export default App;
