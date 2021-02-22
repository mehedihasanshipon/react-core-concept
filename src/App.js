// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
let style = {
  color : 'red',
  backgroundColor : 'green'
}
function App() {
  let products = [
    {
      name : 'Photoshop',
      price : '$99'
    },
    {
      name : 'Illustrator',
      price : '$66'
    },
    {
      name : 'Adobe reader',
      price : '$6'
    },
    {
      name : 'Adobe reader',
      price : '$6'
    },
    {
      name : 'Adobe reader',
      price : '$6'
    },
    {
      name : 'Adobe reader',
      price : '$6'
    }
  ]
  return (
    <div className="App">
      <h1 style={style}>I am react person</h1>
      <h3 style= {{color:'green',backgroundColor:'red'}}>I love to learn react js</h3>
     
      {/* <Person name = "Mehedi Hasan" job = "Student"></Person>
      <Person name = "Shipon" job = "Student" /> */}

      {/* <Product product = {products[0]} />
      <Product product = {products[1]} />
      <Product product = {products[2]} />
      <Product product = {products[2]} />
      <Product product = {products[2]} /> */}
      <Counter />
      <Users />
      {
        products.map(product => <Product product = {product} />)
      }
      
    

    </div>
    
  );
}

function Person(data){
  // console.log(props);
  let personStyle = {
    border : '2px solid tomato',
    borderRadius: '1rem',
    backgroundColor:'tomato',
    margin : '10px auto',
    padding: '.8rem',
    width : '40%',
  }
  return (
    <div style = {personStyle}>
      <h3>Name : {data.name}</h3>
      <h5>Job : {data.job}</h5>
    </div>
  );
}

const Product = (props) => {
  // console.log(props.product);
  const {name, price} = props.product;
  // console.log(name);
  let productStyle = {
    border : '1px solid gray',
    borderRadius : '1rem',
    backgroundColor : 'lightGray',
    margin : '1rem',
    width : '25%',
    padding : '1.2rem',
    float : 'left',
    
  }
  return(
    <div style = {productStyle}>
      <h3>{name}</h3>
      <h2>Price : {price}</h2>
      <button>Buy now</button>
    </div>
  );
}

const Counter = () => {
  const [count,setCount] = useState(0);
  // const handleIncrease = () => setCount (count +1);
  // const handleDecrease = () => {
  //   // console.log('Clicked');
  //   const newCount = count - 1;
  //   setCount (newCount);
  // }
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick = {() => setCount (count +1)}>Increase</button>
      <button onClick = {() => setCount (count - 1)}>Decrease</button>
    </div>
  );
}

const Users = () =>{
  const [users,setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  },[])
  return (
    <div>
      <h3>Dynamic Data: {users.length}</h3>
      {console.log(users)}
      <ul>
        {
          users.map((user) => <li>{user.address.zipcode}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
