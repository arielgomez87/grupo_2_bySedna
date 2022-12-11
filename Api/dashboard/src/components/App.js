import React, {useState, useEffect} from 'react';
import SideBar from './SideBar';
import Login from './Login';
import "../assets/css/login.css";
import Products from './Products';

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
      fetch('/api/products')
          .then(response => response.json())
          .then(datos=> {
              setProducts(datos.data);
          })
          
  }

  useEffect(()=> {
      fetchProducts()
  },[])

  return (
    <React.Fragment>  
      	<div id="wrapper">
          <SideBar products = {products}/>
        </div>
        
    </React.Fragment>
  );
}

export default App;
