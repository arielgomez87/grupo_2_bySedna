import React, {useState, useEffect} from 'react';
import SideBar from './SideBar';
import Login from './Login';
import "../assets/css/login.css";
import Products from './Products';

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchProducts = () => {
      fetch('/api/products')
          .then(response => response.json())
          .then(datos=> {
              setProducts(datos.data);
          })
          
  }

  const fetchCategories = () => {
    fetch('/api/categories')
        .then(response => response.json())
        .then(datos=> {
            setCategories(datos.data);
        })
        
}

  
  const fetchUsers = () => {
    fetch('/api/users')
        .then(response => response.json())
        .then(datos=> {
            setUsers(datos.data);
        })
        
}

  useEffect(()=> {
      fetchProducts()
  },[])

  useEffect(()=> {
    fetchCategories()
},[])

  useEffect(()=> {
    fetchUsers()
},[])

 const props = {
    products: products,
    users: users,
    categories: categories
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
