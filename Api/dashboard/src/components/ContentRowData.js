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

    let categoriesTotal = {
        title:' Product Categories in DataBase', 
        color:'success', 
        quantity: props.categories.length,
        icon:'far fa-users'
    }
    
    
    let cartProps = [productsTotal, usersTotal];


    return (
    
        <div className="row mb-3">
            
            {cartProps.map( (data, i) => {

                return <SmallCard {...data} key={i} props={props}/>
                
            
            })}
        </div>
        
    )
}

export default ContentRowData;