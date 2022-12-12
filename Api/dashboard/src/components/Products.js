import React, {useState, useEffect} from "react";


  function Products({props}){
  {/* xq no funciona el products.data.data? */}
    console.log(props.products)
   
     return (
    
    <div className="row">

{props.products.length > 0 && 
            props.products.map(product => (
                
              <>
              <div class="card" style={{width: "18rem", margin: "1rem"}}>
                  <img src={product.img} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text"> <strong>Price: </strong> {product.price}</p>
                    <p class="card-text"> <strong>Stock: </strong> {product.productSize.length}</p>
                    <p class="card-text"> <strong>Images: </strong> {product.image.length}</p>
                    <p class="card-text"> <strong>Discount: </strong> {product.discount}%</p> 
                    <a href={"Products/" + product.id} class="btn btn-primary">Detalles de producto</a>
                  </div>
                </div> 
              </>
  ))}



          
      


    </div>)
}

export default Products;