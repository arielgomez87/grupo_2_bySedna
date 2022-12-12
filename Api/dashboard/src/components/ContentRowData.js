import React from 'react';
import SmallCard from './SmallCard';


function ContentRowData({props}){


    let productsTotal = {
        title: 'Products in Data Base',
        color: 'primary', 
        quantity: props.products.length,
        icon: 'fa-clipboard-list'
    }

    
    let usersTotal = {
        title:' Users in DataBase', 
        color:'success', 
        quantity: props.users.length,
        icon:'far fa-users'
    }
    

    let actorsQuantity = {
        title:'Actors quantity' ,
        color:'warning',
        quantity:'49',
        icon:'fa-user-check'
    }
    
    let cartProps = [productsTotal, usersTotal, actorsQuantity];


    return (
    
        <div className="row">
            
            {cartProps.map( (data, i) => {

                return <SmallCard {...data} key={i} props={props}/>
            
            })}

        </div>
    )
}

export default ContentRowData;