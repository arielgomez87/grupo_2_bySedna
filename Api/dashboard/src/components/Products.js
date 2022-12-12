import React, {useState, useEffect} from "react";


  function Products({props}){
  {/* xq no funciona el products.data.data? */}
    console.log(props.products)
   
     return (
    <>
<div className="row mx-auto">
<div className="col-lg-12 text-center card-header">
<h1 className="m-2">Products in Database</h1>
</div>
{props.products.length > 0 && 
            props.products.map(product => (
                
              <>
              <div class="card shadow" style={{width: "18rem", margin: "1rem",maxHeight: "20rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text"> <strong>Price: </strong> {product.price}</p>
                    <p class="card-text"> <strong>Stock: </strong> {product.productSize.length}</p>
                    <p class="card-text"> <strong>Images: </strong> {product.image.length}</p>
                    <p class="card-text"> <strong>Discount: </strong> {product.discount}%</p> 
                  </div>
                </div> 
              </>
  ))}
    </div>
    </>
    
      )
}

export default Products;