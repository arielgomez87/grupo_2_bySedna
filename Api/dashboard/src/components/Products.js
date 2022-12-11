import React, {useState, useEffect} from "react";


  function Products({products}){
  {/* xq no funciona el products.data.data? */}
    console.log(products.length)
   
     return (
    
    <div>

        
<p>{products.total}</p>



        {products.length > 0 && 
            products.map(product => (
                
                <>
                <p >{product.name}</p>
                <p >{product.name}</p>
            <p >{product.image[0].name}</p>
            <img src=""></img>


{/* <div class="card" style="width: 18rem;">
  <img src={"../../../../bySedna/public/images/products" + product.image.name} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


            </>)) 
        }


    </div>)
}

export default Products;