import React, {useState, useEffect} from 'react';
import SideBar from './SideBar';
import Login from './Login';
import "../assets/css/login.css";
import Products from './Products';

function App() {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchProducts = () => {
      fetch('/api/products')
          .then(response => response.json())
          .then(datos=> {
              setProducts(datos.data);
          })
          
  }

  
  const fetchUsers = () => {
    fetch('/api/users')
        .then(response => response.json())
        .then(datos=> {
            setUsers(datos);
        })
        
}

  useEffect(()=> {
      fetchProducts()
  },[])

  useEffect(()=> {
    fetchUsers()
},[])

 const props = {
    products: products,
    users: users
 }

  return (
    <React.Fragment>  
      	<div id="wrapper">
          <SideBar props={props}/>
        </div>
        
    </React.Fragment>
  );
}

export default App;
