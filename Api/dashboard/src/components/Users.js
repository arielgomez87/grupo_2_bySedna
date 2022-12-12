import React, {useState, useEffect} from "react";


  function Users({props}){
  {/* xq no funciona el products.data.data? */}
    console.log(props)

   
     return (
    <>

<div className="row mx-auto">
<div className="col-lg-12 text-center card-header">
<h1 className="m-2">Users in Database</h1>
</div>

{props.users.length > 0 && 
            props.users.map(user => 
            
            
            (
                
              <>
              <div class="card shadow" style={{width: "18rem", margin: "1rem",maxHeight: "20rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">{user.name}</h5>
                    <p class="card-text"> <strong>Full Name: </strong>{user.fullName}</p>
                    <p class="card-text"> <strong>Email: </strong>{user.email}</p>
                    <p class="card-text"> <strong>Phone: </strong>{user.phoneNumber}</p>
                    <p class="card-text"> <strong>Province: </strong>{user.Province.name}</p>
                    <p class="card-text"> <strong>Address: </strong>{user.address}</p> 
                    <p class="card-text"> <strong>Rol: </strong>{
                      user.rolId != 2 ? "Usuario" : "Admin"
                    }</p> 
                  </div>
                </div> 
              </>
  ))}



          
      


    </div>
    </>
    
      )
}

export default Users;