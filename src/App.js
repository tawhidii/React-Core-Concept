import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'PhotoShop',price:"12$"},
    {name:'Priemere Pro',price:"13$"}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <p> I am a react person </p>
      <Product product={products[0]}></Product>
      <Person name='Tawidi Bari' profession="Hacker" salary="20M"></Person>
      </header> 
    </div>
  );
}


function Product(props){

  const productStyle = {
    border:"1px solid grey",
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:"200px",
    weight:"200px",
    float:"left",
  }
  const {name,price} = props.product
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now !</button>
    </div>
  )
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
